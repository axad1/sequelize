"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.addColumn("users", "company_id", {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: "company",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.removeColumn("users", "company_id");
  },
};
