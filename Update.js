//Model № 6

const { User } = require("./models/User");

(async () => {
  try {
    await User.sync({
      alter: true,
      force: false,
    });
    const user_update = await User.update(
      { first_name: "Alexey" },
      {
        where: {
          last_name: "Ivanov",
        },
      }
    );
    console.log(user_update);
  } catch (error) {
    console.error(error);
  }
})();
