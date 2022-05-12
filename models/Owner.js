const { Model, DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// create Owner model
class Owner extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// create fields/columns for Owner model
Owner.init(
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [4],
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true,
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "You must enter Phone Number" },
            isInt: { args: true, msg: "You must enter Phone Number" },
        },
    },
    dog_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'dog',
            key: 'id'
        }
    }
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newOwnerData) {
        newOwnerData.password = await bcrypt.hash(
          newOwnerData.password,
          10
        );
        return newOwnerData;
      },

      async beforeUpdate(updatedOwnerData) {
        updatedOwnerData.password = await bcrypt.hash(
          updatedOwnerData.password,
          10
        );
        return updatedOwnerData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Owner",
  }
);

module.exports = Owner;
