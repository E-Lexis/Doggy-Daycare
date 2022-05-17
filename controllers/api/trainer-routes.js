// Express.js connection
const router = require("express").Router();
// User, Task, Event models
const { Owner, Trainer, Dog } = require("../../models");
// Express Session for the session data
const session = require("express-session");
// passport for authentication
const passport = require("passport");
// password and authentication utilities
const genPassword = require("../../lib/passwordUtils").genPassword;
const isAuth = require("../../utils/auth").isAuth;
// Sequelize store to save the session so the user can remain logged in
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// GET all trainers
router.get("/", (req, res) => {
  console.log("-----------------------");
  Trainer.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbTrainerData) => res.json(dbTrainerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", passport.authenticate('local', {failureRedirect: '/login', successRedirect: '/home'}));

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

// GET single trainer
router.get("/:id", (req, res) => {
  console.log("-----------------------");
  Trainer.findOne({
    attributes: { exclude: ["password"] },
    where: { id: req.params.id },
  })
    .then((dbTrainerData) => {
      if (!dbTrainerData) {
        res.status(404).json({ message: "No trainer found with this id" });
        return;
      }
      res.json(dbTrainerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create Trainer
router.post("/", (req, res) => {
  console.log("-----------------------");
  const saltHash = genPassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;
  Trainer.create({
    username: req.body.username,
    email: req.body.email,
    hash: hash,
    salt: salt
  })
    .then((dbTrainerData) => {
      res.json(dbTrainerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Trainer login
router.post("/login", (req, res) => {
  console.log("-----------------------");
  Trainer.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbTrainerData) => {
    if (!dbTrainerData) {
      res.status(400).json({ message: "No trainer with that username" });
      return;
    }
  })
    .then(dbTrainerData => {
      if (!dbTrainerData) {
        res.status(400).json({ message: 'No trainer with that username' });
        return;
      }
      const validPassword = dbTrainerData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password' });
        return;
      }
      req.session.save(() => {
        // declare session variables
        req.session.user_id = dbTrainerData.id;
        req.session.username = dbTrainerData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbTrainerData, message: 'You are now logged in!' });
        });
      });
});

// Update Trainer info
router.put("/:id", (req, res) => {
  console.log("-----------------------");
  Trainer.update(req.body, {
    attributes: { exclude: ["password"] },
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbTrainerData) => {
      if (!dbTrainerData) {
        res.status(404).json({ message: "No trainer found with this id" });
        return;
      }
      res.json(dbTrainerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete Trainer
router.delete("/:id", (req, res) => {
  console.log("-----------------------");
  Trainer.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTrainerData) => {
      if (!dbTrainerData) {
        res.status(404).json({ message: "No trainer found with this id" });
        return;
      }
      res.json(dbTrainerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
