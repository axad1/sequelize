const db = require("./models");
module.exports = () =>
  db
    .authenticate()
    // .then(()=> db.sync())
    .then(() => console.log("DB connected successfully"))
    .catch((e) => console.log("DB connection failed", e));
