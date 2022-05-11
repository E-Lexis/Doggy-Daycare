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

// Update Trainer info
router.put('/:id', (req, res) => {
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