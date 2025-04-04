const mongoose = require("mongoose");
require("dotenv").config();
const { schema, connect } = mongoose;

const connectDB = () => {
  return connect(process.env.DB_CONNECTION_ACCESS);
};

module.exports = connectDB;

// connect(process.env.DB_CONNECTION_ACCESS)
//   .then(() => {
//     console.log("CONNECTED TO THE DB...");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
