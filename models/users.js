const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");
const Company = require("./company");

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
    // age: {
    //   type: DataTypes.INTEGER,
    //   // allowNull: false,
    //   // defaultValue: 18,
    // },
    companyId: {
      field: "company_id",
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: "company",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    },
  },
  {
    timestamps: true,
    // updatedAt: "updated_at",
    // createdAt: false
  }
);

// User.hasOne(Company, {
//   foreignKey: "company_id",
// });

User.belongsTo(Company, {
  foreignKey: "company_id",
});

// User.sync({ alter: false });

module.exports = User;
