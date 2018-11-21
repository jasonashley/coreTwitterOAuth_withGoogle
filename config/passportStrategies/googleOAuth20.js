const GoogleStrategy = require("passport-google-oauth20").Strategy;
if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

module.exports = (passport, User) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.google_oauth20_dev_client_id,
        clientSecret: process.env.google_oauth20_dev_client_secret,
        callbackURL: "/auth/google/callback"
      },
      (accesstoken, refreshToken, profile, done) => {
        User.findOne({
          googleId: profile.id
        }).then(userExists => {
          if (userExists) {
            done(null, userExists);
          } else {
            new User({
              googleId: profile.id
            })
              .save()
              .then(user => {
                done(null, user);
              });
          }
        });
      }
    )
  );
};
