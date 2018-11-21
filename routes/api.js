apiController = require("../controllers/api");

module.exports = {
  init: router => {
    router.route("/api/get-user").get(apiController.getUser);

    router.route("/api/logout").get(apiController.logout);
  }
};
