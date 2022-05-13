const { Dog } = require('../models')

const dogdata = [
    {
        name: "Harold",
        breed: "Chihuahua",
        age: 4,
        size: "Small",
        // owner_id: 1
    },
    {
        name: "Remi",
        breed: "Border Collie",
        age: 1,
        size: "Medium",
        // owner_id: 1
    },
    {
        name: "Benji",
        breed: "Poodle",
        age: 8,
        size: "Large",
        // owner_id: 2
    }
];

const seedDogs = () => Dog.bulkCreate(dogdata);

module.exports = seedDogs;