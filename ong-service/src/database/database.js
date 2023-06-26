const mongoose = require("mongoose");
const color = require("colors");
require("dotenv").config();

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(
      color.cyan.underline.bold(`MONGO DB CONNECTED: ${conn.connection.host}`)
    );
  } catch (err) {
    console.log(color.red(`Error: ${err.message}`));
    process.exit(1);
  }
};

module.exports = dbConnection;
