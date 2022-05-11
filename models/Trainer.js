const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// create our Trainer model
class Trainer extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// create fields/columns for Trainer model
Trainer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newTrainerData) {
        newTrainerData.password = await bcrypt.hash(newTrainerData.password, 10);
        return newTrainerData;
      },

      async beforeUpdate(updatedTrainerData) {
        updatedTrainerData.password = await bcrypt.hash(
          updatedTrainerData.password,
          10
        );
        return updatedTrainerData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = Trainer;
