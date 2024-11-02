const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

const Employee = Model.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    sequelize,
    modelName: "Employee",
  }
);

Employee.sync();

module.exports = Employee;
