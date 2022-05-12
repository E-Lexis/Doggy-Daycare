const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Trainer model
class Dog extends Model { }

Dog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "dog",
    }
);

module.exports = Dog;