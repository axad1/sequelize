const { Sequelize } = require("sequelize");
module.exports = new Sequelize("sqlite:db.sqlite");