const assert = require("assert");
const mongoose = require("mongoose");
// require('../models/Users');
const User = mongoose.model("users");

describe("Reading Test", () => {
  let testUser;

  beforeEach(done => {
    testUser = new User({
      googleId: "123abcZCY"
    });
    testUser.save().then(() => {
      done();
    });
  });

  it("beforeEach, mongooose, query the beforeEach user, assert returned array of user[0] holds test user", done => {
    User.find({
      googleId: "123abcZCY"
    })
      .then(users => {
        assert(users[0]._id.toString() === testUser._id.toString());
        done();
      })
      .catch(err => {
        console.log("error message : " + err);
      });
  });
});
