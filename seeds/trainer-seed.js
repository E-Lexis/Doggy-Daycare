const { Trainer } = require('../models')

const trainerdata = [
  {
    username: "OwnerUsername",
    email: "owner@mail.com",
    password: "password1234",
    position: "Owner",
    about_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi voluptatum odio earum, et expedita omnis quod blanditiis! A vel aperiam illo, error maxime odit animi quidem soluta esse modi."
  },
  {
    username: "Scheduler",
    email: "scheduler@mail.com",
    password: "password1234",
    position: "Scheduler",
    about_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi voluptatum odio earum, et expedita omnis quod blanditiis! A vel aperiam illo, error maxime odit animi quidem soluta esse modi."
  },
  {
    username: "LeadTrainer",
    email: "LeadTrainer@mail.com",
    password: "password1234",
    position: "Lead Trainer",
    about_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi voluptatum odio earum, et expedita omnis quod blanditiis! A vel aperiam illo, error maxime odit animi quidem soluta esse modi."
  },
  {
    username: "Cleaner",
    email: "cleaner@mail.com",
    password: "password1234",
    position: "Cleaner",
    about_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi voluptatum odio earum, et expedita omnis quod blanditiis! A vel aperiam illo, error maxime odit animi quidem soluta esse modi."
  }
];

const seedTrainers = () => Trainer.bulkCreate(trainerdata)

module.exports = seedTrainers