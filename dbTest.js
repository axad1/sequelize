const connectDB = require("./connectDB");
const Company = require("./models/company");
const User = require("./models/users");

(async () => {
  await connectDB();
    // await User.destroy({ where: {} });
    // await Company.destroy({ where: {} });
  // const dbUsers = (await User.findAll({
  //   include: [Company]
  // }))
  //.map((user) => ({...user.toJSON(), books: user.books.map(book => book.toJSON())}))
  // console.log(JSON.stringify(dbUsers, null, 2));
  // console.log(dbUsers);
    // return;

  const company = {
    name: "company1",
  };

  const users = [
    {
      firstName: "test",
      lastName: "user1",
      // age: 20,
      // companyId: company.id,
      company,
    },
    // {
    //   firstName: "test2",
    //   lastName: "user2",
    //   // age: 21,
    //   books: books,
    // },
  ];

  //   const res = await User.bulkCreate(users);

  const res = await User.bulkCreate(users, {
    include: [{ association: "company" }],
  });

  //   const res = await Book.bulkCreate(books);

  //   console.log("res => ", res);
})();
