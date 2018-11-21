if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
var TwitterStrategy = require("passport-twitter").Strategy;

module.exports = (passport, User) => {
  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.twitter_oauth_dev_consumer_api_key,
        consumerSecret: process.env.twitter_oauth_dev_consumer_api_secret_key,
        callbackURL: "http://localhost:5000/auth/twitter/callback",
        passReqToCallback: true
      },
      (req, token, tokenSecret, profile, done) => {
        User.findOne({
          twitterId: profile.id
        }).then(userExists => {
          if (userExists) {
            done(null, userExists);
          } else {
            new User({
              twitterId: profile.id,
              twitterName: profile.displayName
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
