const assert = require("assert");
require("../models/Users");
const mongoose = require("mongoose");
const User = mongoose.model("users");

describe("Create records", () => {
  it("Saves a googleID to mongodb, assert using !testUser.isNew of mongoose", done => {
    const testUser = new User({
      googleId: "123abc"
    });
    testUser.save().then(() => {
      assert(!testUser.isNew);
      done();
    });
  });
});
