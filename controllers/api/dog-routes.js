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

// Creates a new DOG
// router.post('/', (req, res) => {
//     // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
//     Dog.create({
//         comment_text: req.body.comment_text,
//         user_id: req.session.user_id,
//         post_id: req.body.post_id
//     })
//         .then(dbDogData => res.json(dbDogData))
//         .catch(err => {
//             console.log(err);
//             res.status(400).json(err);
//         });
// });

// Deletes a Dog
// router.delete('/:id', (req, res) => {
//     Dog.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbDogData => {
//             if (!dbDogData) {
//                 res.status(404).json({ message: 'No comment found with this id!' });
//                 return;
//             }
//             res.json(dbDogData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router;