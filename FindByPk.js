//Model № 2

const { User } = require("./models/User");

(async () => {
  try {
    await User.sync({
      alter: true,
      force: false,
    });
    const user_FindByPk = await User.findByPk(1);
    console.log(user_FindByPk);
  } catch (error) {
    console.error(error);
  }
})();
