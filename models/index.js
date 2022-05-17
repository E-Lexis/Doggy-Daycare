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

Dog.belongsTo(Trainer, {
  foreignKey: 'trainer_id'
});

Trainer.hasMany(Dog, {
  foreignKey: 'dog_id'
});

Trainer.hasMany(Owner, {
  foreignKey: 'owner_id'
});

module.exports = { Dog, Trainer, Owner };