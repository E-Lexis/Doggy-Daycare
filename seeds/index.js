const seedTrainers = require('./trainer-seed');

const sequelize = require('../config/connection')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('----------------------');
  await seedTrainers();
  console.log('----------------------');

  process.exit(0);
};

seedAll();