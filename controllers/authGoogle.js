const passport = require("passport");

module.exports = {
  getAuthGoogle: passport.authenticate("google", {
    scope: ["profile", "email"]
  }),

  getAuthGoogleCallback: passport.authenticate("google", {
    successRedirect: "/home",
    failure: "/error"
  })
};
