"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.removeColumn("users", "age");
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.addColumn("users", "age", {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 18,
    });
  },
};
