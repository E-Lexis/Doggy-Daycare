// import Model class and DataTypes object from sequelize
const { Model, DataTypes } = require('sequelize');
// use bcrypt for password hashing
const bcrypt = require("bcrypt");
// Sequelize connection to the database
const sequelize = require('../config/connection');

// create User model
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// define table columns and configurations
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      // must have a value
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      //username cannot be duplicated
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // is email format email@service.com
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
    // hash: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // salt: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    //pass our imported sequelize connection
    sequelize,
    // false: don't automatically create
    // true: automatically create
    timestamps: false,
    //don't pluralize name of db tables
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;