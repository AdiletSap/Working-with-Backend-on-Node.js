//Model № 5

const { User } = require("./models/User");

(async () => {
  try {
    await User.sync({
      alter: true,
      force: false,
    });
    const user_delete = await User.destroy({
      where: {
        id: 12,
      },
    });
    console.log(user_delete.id);
  } catch (error) {
    console.error(error);
  }
})();
