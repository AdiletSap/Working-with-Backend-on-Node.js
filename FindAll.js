//Model № 1

const { User } = require("./models/User");

(async () => {
  try {
    await User.sync({
      alter: true,
      force: false,
    });
    const users = await User.findAll();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
})();
// User.User_2 = User.belongsTo(User_2);
// User.Users = User.hasOne(User_2);
