const router = require("express").Router();
const { Dog } = require("../../models");

// GET all Dogs
router.get('/', (req, res) => {
    Dog.findAll()
        .then(dbDogData => res.json(dbDogData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});

// GET One Dog
router.get('/:id', (req, res) => {
    Dog.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbDogData => {
            if (!dbDogData) {
                res.status(404).json({ message: 'No Dog was found with this id!' });
                return;
            }
            res.json(dbDogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET Dog by Breed
// GET Dog by Owner
// GET Dog by Size

// CREATE a new DOG
router.post('/', (req, res) => {
    Dog.create({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        size: req.body.size
    })
        .then(dbDogData => res.json(dbDogData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

// UPDATE a Dog
router.put('/:id', (req, res) => {
    Dog.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbDogData => {
            if (!dbDogData) {
                res.status(404).json({ message: 'No Dog was found with this id!' });
                return;
            }
            res.json(dbDogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// DELETE a Dog
router.delete('/:id', (req, res) => {
    Dog.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbDogData => {
            if (!dbDogData) {
                res.status(404).json({ message: 'No Dog found with this id!' });
                return;
            }
            res.json(dbDogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;