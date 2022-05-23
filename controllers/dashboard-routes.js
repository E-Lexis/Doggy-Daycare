const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Dog, Comment, Appointment } = require('../models')
const withAuth = require('../utils/auth');

router.get("/", withAuth, (req, res) => {
    console.log(req.session);
    console.log("======================");
  Dog.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "name",
      "age",
      "gender",
      "breed",
      "bio",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM appointment WHERE dog.id = appointment.dog_id)"
        ),
        "appointment_time",
      ],
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Appointment,
        attributes: ["startDate"],
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
    ],
  })
    .then(dbDogData => {
      const dogs = dbDogData.map(dog => dog.get({ plain: true }))
      res.render("dashboard", { 
        dogs,
        loggedIn: true
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', (req, res) => {
  console.log("======================");
  Dog.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      "id",
      "name",
      "age",
      "gender",
      "breed",
      "bio",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM appointment WHERE dog.id = appointment.dog_id)"
        ),
        "appointment_time",
      ],
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Appointment,
        attributes: ["startDate"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then(dbDogData => {
      if (dbDogData) {
        const dog = dbDogData.get({ plain: true });
        
        res.render('edit-dog', { dog, loggedIn: true });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      console.log(err);
      console.log('I HAVE BROKEN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
      res.status(500).json(err);
    });
});

router.get("/edituser", withAuth, (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.session.user_id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      const user = dbUserData.get({ plain: true });
      res.render("edit-user", { user, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;