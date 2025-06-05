const sequelize = require("./db/sequelize");
module.exports = () =>
  sequelize
    .authenticate()
    // .then(()=> db.sync())
    .then(() => console.log("DB connected successfully"))
    .catch((e) => console.log("DB connection failed", e));
