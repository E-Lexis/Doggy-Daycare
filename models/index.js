const Dog = require('./Dog')
const Trainer = require('./Trainer');
const Owner = require('./Owner');

Owner.hasMany(Dog, {
  foreignKey: 'owner_id',
});

Dog.belongsTo(Owner, {
  foreignKey: 'owner_id',
  onDelete: 'cascade',
});

module.exports = { Dog, Trainer, Owner };