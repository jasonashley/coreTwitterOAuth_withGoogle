if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
const mongoose = require("mongoose");

// db
mongoose.connect(
  process.env.atlas_clusterM0_userm001Basic_url,
  {
    useNewUrlParser: true,
    replicaSet: process.env.atlas_clusterM0_userm001Basic_replicaSet,
    ssl: true,
    authSource: "admin",
    retryWrites: true
  }
);

mongoose.connection
  .once("open", () => {
    console.log("connection established with mongoose driver");
  })
  .on("error", error => {
    console.warn("Warning on connection attempt", error);
  })
  .on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("Mongoose disconnected through app termination");
      process.exit(0);
    });
  });
