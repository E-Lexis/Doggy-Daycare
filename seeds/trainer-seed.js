const { Trainer } = require('../models')

const trainerdata = [
  {
    username: "trainer 1",
    email: "T1@mail.com",
    password: "password1234",
  },
  {
    username: "trainer 2",
    email: "T2@mail.com",
    password: "password1234",
  },
  {
    username: "trainer 3",
    email: "T3@mail.com",
    password: "password1234",
  },
  {
    username: "trainer 4",
    email: "T4@mail.com",
    password: "password1234",
  }
];

const seedTrainers = () => Trainer.bulkCreate(trainerdata)

module.exports = seedTrainers