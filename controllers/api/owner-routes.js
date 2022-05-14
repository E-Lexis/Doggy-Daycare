const router = require("express").Router();
const { Owner } = require("../../models");

// GET all Owners
router.get('/', (req,res) => {
  console.log('-----------------------');
  Owner.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbOwnerData => res.json(dbOwnerData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    });
});

// GET single Owner
router.get('/:id', (req, res) => {
  console.log('-----------------------');
  Owner.findOne({
    attributes: { exclude: ['password'] },
    where: { id: req.params.id }
  })
    .then(dbOwnerData => {
      if (!dbOwnerData) {
        res.status(404).json({ message: 'No Owner found with this id' });
        return;
      }
      res.json(dbOwnerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create Owner
router.post('/', (req, res) => {
  console.log('-----------------------');
  Owner.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone
  })
    .then(dbOwnerData => {
      res.json(dbOwnerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Owner login
router.post('/login', (req, res) => {
  console.log('-----------------------');
  Owner.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(dbOwnerData => {
      if (!dbOwnerData) {
        res.status(400).json({ message: 'No Owner with that username' });
        return;
      }
      const validPassword = dbOwnerData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password' });
        return;
      }
        res.json({ Owner: dbOwnerData, message: 'You are now logged in!' });
    });
});

// Update Owner info
router.put('/:id', (req, res) => {
  console.log('-----------------------');
  Owner.update(req.body, {
    attributes: { exclude: ["password"] },
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbOwnerData) => {
      if (!dbOwnerData) {
        res.status(404).json({ message: "No Owner found with this id" });
        return;
      }
      res.json(dbOwnerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

// Delete Owner 
router.delete('/:id', (req, res) => {
  console.log('-----------------------');
  Owner.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbOwnerData => {
      if (!dbOwnerData) {
        res.status(404).json({ message: 'No Owner found with this id' });
        return;
      }
      res.json(dbOwnerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;