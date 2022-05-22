const { Dog } = require('../models');

const dogdata = [
  {
    name: "Happy",
    age: 4,
    gender: "Male",
    breed: "Pitbull mix",
    bio: "Happy is the goodest boy always looking to give kisses and make sure everyone feels the love!",
    user_id: 1,
  },
  {
    name: "Sassy",
    age: 7,
    gender: "Female",
    breed: "Chihuahua Corgi mix",
    bio: "Sassy is a quiet girl, shes a workaholic and has an obsession with licking people...",
    user_id: 1,
  },
  {
    name: "Millie",
    age: 8,
    gender: "Female",
    breed: "Terrier mix",
    bio: "Millie is shy, but loves a good back rub due to her skin condition. Needs to work on itching less",
    user_id: 3,
  },
  {
    name: "Konan",
    age: 9,
    gender: "Male",
    breed: "Doberman",
    bio: "He's a doffie dobie, but we love him. He gets spoiled with bones",
    user_id: 2,
  },
  {
    name: "Penelope",
    age: 1,
    gender: "Female",
    breed: "Whippet Chihuahua mix",
    bio: "Penny is a ball of energy, but she does a great job at keeping herself entertained!",
    user_id: 4,
  },
  {
    name: "Bella",
    age: 2,
    gender: "Female",
    breed: "Chihuahua mix",
    bio: "Bella is known to be a brat, shes not a fan of sharing, but she loves her mom more than anything",
    user_id: 4,
  },
  {
    name: "Mowgli",
    age: 1,
    gender: "Male",
    breed: "Little mix",
    bio: "Mowgli is new! He's 11 weeks old and a goofy boy, hes still figuring out where his feet go",
    user_id: 6,
  },
];

const seedDogs = () => Dog.bulkCreate(dogdata);

module.exports = seedDogs;