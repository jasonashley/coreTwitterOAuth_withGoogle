var home = require("./home");
var authGoogle = require("./authGoogle");
var authTwitter = require("./authTwitter");
var api = require("./api");

module.exports = {
  init: (app, router) => {
    authGoogle.init(router);
    authTwitter.init(router);
    api.init(router);
    home.init(router);

    app.use("/", router);
  }
};
