const { DataTypes } = require("sequelize");
const sequelize = require(".");

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
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
      type: DataTypes.INTEGER,
      // allowNull: false,
      // defaultValue: 18,
    },
  },
  {
    timestamps: true,
    // updatedAt: "updated_at",
    // createdAt: false
  }
);

// User.sync({ alter: false });

module.exports = User;
