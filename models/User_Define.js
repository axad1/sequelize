const { DataTypes } = require("sequelize");
const sequelize = require("../conn");

module.exports = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
    },
    {
      // timestamps: false,
      // updatedAt: "updated_at",
      // createdAt: false
    },
  );    

