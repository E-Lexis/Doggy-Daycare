const router = require('express').Router();
const { Dog, User, Appointment, Comment } = require('../../models');
const withAuth = require("../../utils/auth");
const sequelize = require('../../config/connection');

// GET api/dogs 
router.get('/', (req, res) => {
  console.log('======================');
  Dog.findAll({
    order: [["created_at", "DESC"]],
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
    .then((dbDogData) => res.json(dbDogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET api/dogs/:id
router.get("/:id", (req, res) => {
  console.log("======================");
  Dog.findOne({
    where: {
      id: req.params.id,
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
          attributes: ['username']
        }
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
    .then((dbDogData) => {
      if (!dbDogData) {
        res.status(404).json({ message: "No dog found with this id" });
        return;
      }
      res.json(dbDogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST api/dogs
router.post("/", (req, res) => {
  console.log("======================");
  Dog.create({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    breed: req.body.breed,
    bio: req.body.bio,
    user_id: req.session.user_id
  })
    .then((dbDogData) => res.json(dbDogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/dogs/appointment
router.put('/appointment', (req, res) => {
  console.log("======================");
  Appointment.create({
    user_id: req.body.user_id,
    dog_id: req.body.dog_id,
    startDate: req.body.startDate,
  }).then(() => {
    return Dog.findOne({
      where: {
        id: req.body.dog_id
      },
      attributes: [
        'id',
        'name',
        'age',
        'gender',
        'breed',
        'bio',
        'created_at'
        [
          sequelize.literal('(SELECT COUNT(*) FROM appointment WHERE dog.id = appointment.dog_id)'),
          'appointment_time'
        ]
      ]
    })
    .then(dbDogData => res.json(dbDogData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  })
})

// PUT api/dogs/:id
router.put("/:id", (req, res) => {
  console.log("======================");
  Dog.update(req.body, {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbDogData) => {
      if (!dbDogData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbDogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE api/dogs/:id
router.delete("/:id", withAuth, (req, res) => {
  console.log("======================");
  Dog.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbDogData) => {
      if (!dbDogData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbDogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;