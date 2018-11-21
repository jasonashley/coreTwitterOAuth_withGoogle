homeController = require("../controllers/home");
module.exports = {
  init: router => {
    router.use("/", (req, res, next) => {
      if (!req.user) {
        res.redirect("/auth/google");
      }
      next();
    });

    router.route("/home").get(homeController.home);
  }
};
