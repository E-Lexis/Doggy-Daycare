const express = require("express");
const router = express.Router();
const sequelize = require("../config/connection");
const { Owner, Trainer, Dog } = require("../models");


router.get("/", (req, res) => {
  console.log("======================");
  Dog.findAll({
    attributes: ["name", "age", "breed", "size"],
    include: [
      {
        model: Owner,
        attributes: ["username"],
      },
    ],
  })
    .then((dbDogData) => {
      const dogs = dbDogData.map((post) => post.get({ plain: true }));
      res.render("homepage", { dogs });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// const passport = require("passport");
// var OpenIDConnectStrategy = require("passport-openidconnect");

// passport.use(
//   new OpenIDConnectStrategy(
//     {
//       issuer: "https://" + process.env.test["AUTH0_DOMAIN"] + "/",
//       authorizationURL: "https://" + process.env.test["AUTH0_DOMAIN"] + "/authorize",
//       tokenURL: "https://" + process.env.test["AUTH0_DOMAIN"] + "/oauth/token",
//       userInfoURL: "https://" + process.env.test["AUTH0_DOMAIN"] + "/userinfo",
//       clientID: process.env.test["AUTH0_CLIENT_ID"],
//       clientSecret: process.env.test["AUTH0_CLIENT_SECRET"],
//       callbackURL: "/oauth2/redirect",
//       scope: ["profile"],
//     },
//     function verify(issuer, profile, cb) {
//       return cb(null, profile);
//     }
//   )
// );

// passport.serializeUser(function(user, cb) {
//   process.nextTick(function() {
//     cb(null, { id: user.id, username: user.username, name: user.displayName });
//   });
// });

// passport.deserializeUser(function(user, cb) {
//   process.nextTick(function() {
//     return cb(null, user);
//   });
// });

// router.get("/login", passport.authenticate("openidconnect"));

// router.get(
//   "/oauth2/redirect",
//   passport.authenticate("openidconnect", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//   })
// );

module.exports = router;
