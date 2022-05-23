const router = require("express").Router();
const sequelize = require('../config/connection');
const { User, Dog, Comment, Appointment } = require('../models')

router.get('/', (req, res) => {
  console.log('======================');
  // console.log(req.session)
  Dog.findAll({
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
      res.render("homepage", { 
        dogs,
        loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

router.get("/contactus", (req, res) => {
  res.render("contact-us");
});

router.get("/dog/:id", (req, res) => {
  console.log("======================");
  // console.log(req.session)
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
        attributes: ["id", "comment_text", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbDogData) => {
      if(!dbDogData) {
        res.status(404).json({ message: 'No dog found with this id'});
        return;
      }
      const dog = dbDogData.get({ plain: true });

      res.render('single-dog', { 
        dog,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// router.get("/post/:id", (req, res) => {
//   const post = {
//     id: 1,
//     post_url: "https://handlebarsjs.com/guide/",
//     title: "Handlebars Docs",
//     created_at: new Date(),
//     vote_count: 10,
//     comments: [{}, {}],
//     user: {
//       username: "test_user",
//     },
//   };

//   res.render("single-dog", { post });
// });

module.exports = router;
