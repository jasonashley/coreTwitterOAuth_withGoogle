const passport = require("passport");

module.exports = {
  getAuthTwitter: passport.authenticate("twitter"),

  getAuthTwitterCallback: passport.authenticate("twitter", {
    successRedirect: "/home",
    failure: "/error"
  })
};
