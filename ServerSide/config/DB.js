const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECT, {});
    console.log("connected database");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
  }
};

module.exports = connectdb;
