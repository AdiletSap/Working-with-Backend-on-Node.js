//Model № 4

const { User } = require("./models/User");

(async () => {
  try {
    await User.sync({
      alter: true,
      force: false,
    });
    const user_create = await User.create({
      first_name: "Jack",
      last_name: "Johns",
      email: "qwerty@asd.ru",
      password: "qwerty",
    });
    console.log(user_create);
  } catch (error) {
    console.error(error);
  }
})();
