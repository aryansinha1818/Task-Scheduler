// const mongoose = require("mongoose");

// const connectDB = async () => {
//   await mongoose
//     .connect(process.env.MONGODB_URL)
//     .then(() => console.log("Connected to DB"))
//     .catch((err) => console.error("DB connection error:", err));
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  // Use environment variable or default URL
  const mongoURL =
    process.env.MONGODB_URL || "mongodb://mongodb:27017/taskmanager";

  await mongoose
    .connect(mongoURL)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.error("DB connection error:", err));
};

module.exports = connectDB;
