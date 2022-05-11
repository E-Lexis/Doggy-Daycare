const router = require("express").Router();
const { Trainer } = require("../../models");

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

module.exports = router;