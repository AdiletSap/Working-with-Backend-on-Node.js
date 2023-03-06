//Model № 3

const { User } = require("./models/User");

(async () => {
  try {
    await User.sync({
      alter: true,
      force: false,
    });
    const users_find = await User.findAll({
      where: {
        country: "Россия",
      },
    });
    console.log(users_find);
  } catch (error) {
    console.error(error);
  }
})();
