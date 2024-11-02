const sequelize = require("../conn");
const { DataTypes, Model } = require("sequelize");

module.exports = Model.init(
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
    modelName: 'Employee',
  },
);
