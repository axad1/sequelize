const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Company = sequelize.define(
  "company",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "company",
    // updatedAt: "updated_at",
    // createdAt: false
  }
);

module.exports = Company;
