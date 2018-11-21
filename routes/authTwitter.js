authTwitterController = require("../controllers/authTwitter");
module.exports = {
  init: router => {
    router.route("/auth/twitter").get(authTwitterController.getAuthTwitter);

    router
      .route("/auth/twitter/callback")
      .get(authTwitterController.getAuthTwitterCallback);
  }
};
