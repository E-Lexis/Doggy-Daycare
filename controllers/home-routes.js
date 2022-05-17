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

//Owner page routes
router.get("/owners/login", (req, res) => {
  res.render("owner-login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render("owner-signup");
});

//Trainer Page routes
router.get("/trainers/login", (req, res) => {
  res.render("trainer-login");
});

module.exports = router;
