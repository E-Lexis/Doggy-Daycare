const path = require("path");
const express = require("express");
const routes = require('./controllers/')
const exphbs = require("express-handlebars");
var logger = require("morgan");
var session = require("express-session");
// var passport = require("passport");

// var SQLiteStore = require("connect-sqlite3")(session);

var indexRouter = require("./controllers/index");
var authRouter = require("./controllers/home-routes");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false,
//   store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
// }));
// app.use(passport.authenticate("session"));

app.use("/", indexRouter);
app.use("/", authRouter);

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
