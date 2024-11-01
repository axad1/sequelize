const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("sqlite:db.sqlite");
      sequelize.authenticate()
        .then(conn=> console.log('Connection has been established successfully.', conn))
        .catch(err=> console.error('Unable to connect to the database:', err))

module.exports = sequelize;