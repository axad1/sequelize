const connectDB = require("./connectDB");
const {
  getAllUsers,
  getUser,
  addUser,
  addUsers,
  updateUser,
  deleteUser,
  deleteUsers,
} = require("./controllers/user");

(async () => {
  await connectDB();
  const users = [
    {
      firstName: "test",
      lastName: "user",
      // age: 20,
    },
    {
      firstName: "test2",
      lastName: "user",
      // age: 21,
    },
  ];

  // const res = await addUser(users[0]);
  // const res = await getAllUsers();
  // const res = await getUser({ id: 1 });
  // const res = await addUsers(users);
  // const res = await updateUser({ lastName: "Ali" }, { id: 2 });
  // const res = await deleteUser({ id: 1 });
  // const res = await deleteUsers();

  console.log("res => ", res);
})();
