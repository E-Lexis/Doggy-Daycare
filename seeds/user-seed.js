const { User } = require("../models");
// const password = "test";

// const genPassword = require("../lib/passwordUtils").genPassword;
// const saltHash = genPassword(password);
// const salt = saltHash.salt;
// const hash = saltHash.hash;

const userdata = [
  {
    username: "test1",
    email: "test@test.com",
    password: "test",
    // hash: hash,
    // salt: salt,
    admin: true,
  },
  {
    username: "test2",
    email: "test@test.com",
    password: "test",
    // hash: hash,
    // salt: salt,
    admin: false,
  },
  {
    username: "test3",
    email: "test@test.com",
    password: "test",
    // hash: hash,
    // salt: salt,
    admin: false,
  },
  {
    username: "test4",
    email: "test@test.com",
    password: "test",
    // hash: hash,
    // salt: salt,
    admin: false,
  },
  {
    username: "test5",
    email: "test@test.com",
    password: "test",
    // hash: hash,
    // salt: salt,
    admin: true,
  },
  {
    username: "test6",
    email: "test@test.com",
    password: "test",
    // hash: hash,
    // salt: salt,
    admin: false,
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;