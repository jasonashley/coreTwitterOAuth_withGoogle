authGoogleController = require("../controllers/authGoogle");
module.exports = {
  init: router => {
    router.route("/auth/google").get(authGoogleController.getAuthGoogle);

    router
      .route("/auth/google/callback")
      .get(authGoogleController.getAuthGoogleCallback);
  }
};
