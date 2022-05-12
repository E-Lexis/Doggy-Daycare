const router = require("express").Router();
const { Dog } = require("../../models");

// GET all Dogs
router.get('/', (req, res) => {
    console.log('-----------------------');
    Dog.findAll()
        .then(dbDogData => res.json(dbDogData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});

module.exports = router;