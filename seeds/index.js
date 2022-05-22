const seedUsers = require('./user-seed')
const seedDogs = require('./dog-seed')
const seedAppointments = require('./appointment-seed')
const seedComments = require('./comment-seed');


const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("----------------------");
  await seedUsers();
  console.log("----------------------");
  await seedDogs();
  console.log("----------------------");
  await seedAppointments();
  console.log("----------------------");
  await seedComments();


  process.exit(0);
};

seedAll();
