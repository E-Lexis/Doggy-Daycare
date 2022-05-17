const { Owner } = require('../models')

const ownerdata = [
  {
    username: "OwnerOne",
    password: "password1234",
    email: "owner@mail.com",
    first_name: "One",
    last_name: "Onesie",
    phone: "313-111-1111",
  },
  {
    username: "OwnerTwo",
    password: "password1234",
    email: "scheduler@mail.com",
    first_name: "Two",
    last_name: "Twosie",
    phone: "313-222-2222",
  },
  {
    username: "OwnerThree",
    password: "password1234",
    email: "LeadOwner@mail.com",
    first_name: "Three",
    last_name: "Threesie",
    phone: "313-333-3333",
  }
];

const seedOwners = () => Owner.bulkCreate(ownerdata);

module.exports = seedOwners;