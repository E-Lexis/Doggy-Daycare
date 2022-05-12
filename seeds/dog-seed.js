const { Dog } = require('../models')

const dogdata = [
    {
        name: "Harold",
        breed: "Chihuahua",
        age: 4,
        size: "Small"
    },
    {
        name: "Remi",
        breed: "Border Collie",
        age: 1,
        size: "Medium"
    },
    {
        name: "Benji",
        breed: "Poodle",
        age: 8,
        size: "Large"
    }
];

const seedDogs = () => Dog.bulkCreate(dogdata);

module.exports = seedDogs;