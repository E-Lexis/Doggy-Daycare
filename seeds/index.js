const seedTrainers = require('./trainer-seed');
const seedOwners = require('./owner-seed');
const seedDogs = require('./dog-seed');

const sequelize = require('../config/connection')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('----------------------');
  await seedTrainers();
  console.log('----------------------');
  await seedOwners();
  console.log('----------------------');
  await seedDogs();
  console.log('----------------------');

  process.exit(0);
};

seedAll();