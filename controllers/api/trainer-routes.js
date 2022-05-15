const router = require("express").Router();
const { Trainer } = require("../../models");

// GET all trainers
router.get('/', (req,res) => {
  console.log('-----------------------');
  Trainer.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbTrainerData => res.json(dbTrainerData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    });
});

// GET single trainer
router.get('/:id', (req, res) => {
  console.log('-----------------------');
  Trainer.findOne({
    attributes: { exclude: ['password'] },
    where: { id: req.params.id }
  })
    .then(dbTrainerData => {
      if (!dbTrainerData) {
        res.status(404).json({ message: 'No trainer found with this id' });
        return;
      }
      res.json(dbTrainerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create Trainer
router.post('/', (req, res) => {
  console.log('-----------------------');
  Trainer.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbTrainerData => {
      res.json(dbTrainerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Trainer login
router.post('/login', (req, res) => {
  console.log('-----------------------');
  Trainer.findOne({
    where: {
      username: req.body.username
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
  
        res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
});

// Update Trainer info
router.put('/:id', (req, res) => {
  console.log('-----------------------');
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
})

// Delete Trainer 
router.delete('/:id', (req, res) => {
  console.log('-----------------------');
  Trainer.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTrainerData => {
      if (!dbTrainerData) {
        res.status(404).json({ message: 'No trainer found with this id' });
        return;
      }
      res.json(dbTrainerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;