const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // min: 4,
        // max: 6,
        len: [4, 6],
      },
    },
    lastName: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
  },
  {
    // timestamps: false,
    // updatedAt: "updated_at",
    // createdAt: false
  }
);

User.sync({ alter: true });

module.exports = User;
