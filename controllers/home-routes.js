const router = require("express").Router();
const sequelize = require("../config/connection");
const { Owner, Trainer, Dog } = require('../models');

router.get("/", (req, res) => {
  console.log("======================");
  Dog.findAll({
    attributes: [
      'name',
      'age',
      'breed',
      'size'
    ],
    include: [
      {
        model: Owner,
        attributes: ['username']
      }
    ] 
  })
    .then(dbDogData => {
      const dogs = dbDogData.map(post => post.get({ plain:true }))
      res.render('homepage', { dogs });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;