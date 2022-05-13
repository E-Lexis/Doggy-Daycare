const router = require("express").Router();
const sequelize = require("../config/connection");
const { Owner, Trainer, Dog } = require('../models');

router.get("/", (req, res) => {
  console.log("======================");
  Dog.findAll({
    attributes: [
      "id",
      "name",
      "size",
      "breed",
      "age",
      "created_at",
    ],
    include: [
      {
        model: Dog,
        attributes: ["username"],
      },
    ],
  })
    .then((dbDogData) => {
      const dogs = dbDogData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        dogs
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;