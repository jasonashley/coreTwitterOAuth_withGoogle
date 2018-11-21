if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
const assert = require("assert");
const mongoose = require("mongoose");
const User = mongoose.model("users");
mongoose.Promise = global.Promise;

before(done => {
  mongoose.connect(
    process.env.atlas_tests_clusterM0_userm001Basic_url,
    {
      useNewUrlParser: true,
      replicaSet: process.env.atlas_tests_clusterM0_userm001Basic_replicaSet,
      ssl: true,
      authSource: "admin",
      retryWrites: true
    }
  );
  mongoose.connection
    .once("open", () => {
      console.log(" |--- mongoDB connected in test_helper ---|");
      done();
    })
    .on("error", error => {
      console.warn("Warning on connection attempt", error);
    });
});

beforeEach(done => {
  mongoose.connection.collections.users.drop(err => {
    done();
  });
});
