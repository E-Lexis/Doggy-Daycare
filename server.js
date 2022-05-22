// path module
const path = require("path");
// dotenv file for sensitive configuration information
// require("dotenv").config();
// Express.js server
const express = require("express");
// All routes as defined in the controllers folder
// const routes = require("./controllers/");
// Express session to handle session cookies
const session = require("express-session");
// Handlebars template engine for front-end
const exphbs = require("express-handlebars");

// Passport package for authentication, using application specific username and password
// const passport = require("passport");
// const crypto = require("crypto");

// Initialize the server
const app = express();
// Define the port for the server
const PORT = process.env.PORT || 3001;

// Sequelize connection to the database
const sequelize = require("./config/connection");
// Sequelize store to save the session so the user can remain logged in
const SequelizeStore = require("connect-session-sequelize")(session.Store);



//The secret is defined in the .env file so it is kept secure
const sess = {
  secret: "Happy Mowgli",
  cookie: { maxAge: 1000 * 60 * 60 * 24 }, // one day max age
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Tell the app to use Express Session for the session handling
app.use(session(sess));

const helpers = require("./utils/helpers")

// Initialize handlebars for the html templates, using the custom helpers
const hbs = exphbs.create({ helpers });

// Import the Passport config module, and initialize passport and the session
// require("./config/passport");
// app.use(passport.initialize());
// app.use(passport.session());

// Set handlebars as the template engine for the server
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Have Express parse JSON and string data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Give the server a path to the public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Make the session values available
app.use((req, res, next) => {
  // console.log(req.session);
  console.log(req.user);
  next();
});

// turn on routes
app.use(require("./controllers/"));

// Turn on connection to db and then to the server
// force: true to reset the database and clear all values, updating any new relationships
// force: false to maintain data - aka normal operation
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      "Now listening on port %s. Visit http://localhost:%s in your browser.",
      PORT,
      PORT
    )
  );
});
