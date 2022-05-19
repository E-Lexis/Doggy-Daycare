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
      if (req.session.loggedIn) {
      res.redirect("/owners/dashboard");
      return;
    }
  res.render("owner-login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render("owner-signup");
});

router.get('/owners/dashboard', (req, res) => {
  res.render('owner-dashboard');
});

router.get('/owners/dashboard/edit/:id', (req, res) => {
  const post = dbPostData.get({ plain: true });

  res.render('edit-profile', {
   post,
   loggedIn: true
  });

});

module.exports = router;
