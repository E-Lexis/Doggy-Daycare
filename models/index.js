const User = require('./User');
const Dog = require("./Dog");
const Appointment = require('./Appointment');
const Comment = require('./Comment')

// create associations
User.hasMany(Dog, {
  foreignKey: 'user_id'
}),

Dog.belongsTo(User, {
  foreignKey: 'user_id'
})

User.belongsToMany(Dog, {
  through: Appointment,
  as: "appointment_time",
  foreignKey: "user_id",
});

Dog.belongsToMany(User, {
  through: Appointment,
  as: "appointment_time",
  foreignKey: "dog_id",
});

Appointment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
  hooks: true,
});

Appointment.belongsTo(Dog, {
  foreignKey: "dog_id",
  onDelete: "cascade",
  hooks: true,
});

User.hasMany(Appointment, {
  foreignKey: "user_id",
  onDelete: "cascade",
  hooks: true,
});

Dog.hasMany(Appointment, {
  foreignKey: "dog_id",
  onDelete: "cascade",
  hooks: true,
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
  hooks: true,
});

Comment.belongsTo(Dog, {
  foreignKey: "dog_id",
  onDelete: "cascade",
  hooks: true,
});

User.hasMany(Comment, {
  foreignKey: "user_js",
  onDelete: "cascade",
  hooks: true,
});

Dog.hasMany(Comment, {
  foreignKey: "dog_id",
  onDelete: "cascade",
  hooks: true,
});


module.exports = { User, Dog, Appointment, Comment };