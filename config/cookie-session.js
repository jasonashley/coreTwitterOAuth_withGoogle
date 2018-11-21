if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
const cookieSession = require("cookie-session");

module.exports = app => {
  // set cookie-session
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [process.env.cookie_session_key]
    })
  );
};
