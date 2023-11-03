const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery',true)

const MONGODB_URI = process.env.MONGODB_URI;

let connection = mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
//   });

module.exports = {
  connection
};

