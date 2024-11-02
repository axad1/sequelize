const User = require("../models/user");

const getAllUsers = async () => {
  const users = await User.findAll();
  return users.map((user) => user.toJSON());
};

const getUser = async (where = {}) => {
  const user = await User.findOne({
    where,
  });
  //   console.log("user => ", user);
  return user ? user.toJSON() : user;
};

const addUser = async (data) => {
  const user = await User.create(data);
  //   console.log("user => ", user);
  return user.toJSON();
};

const addUsers = async (data = []) => {
  const users = await User.bulkCreate(data, { validate: true });
  //   console.log("users => ", users);
  return users.map((user) => user.toJSON());
};

const updateUser = async (data = {}, where = {}) => {
  const user = await User.update(data, { where });
  //   console.log("user => ", user);
  return user;
};

const deleteUser = async (where = {}) => {
  const user = await User.destroy({ where });
  console.log("user => ", user);
  return user;
};

const deleteUsers = async (data) => {
  const user = await User.destroy({ truncate: true });
  //   console.log("user => ", user);
  return user;
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  addUsers,
  updateUser,
  deleteUser,
  deleteUsers,
};
