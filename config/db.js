//mongoose is an odm object data model
// it helps to connect with database, it helps to create schema,it helps to write mongodb commands in javascript format

const mongoose = require("mongoose"); //import
const colors = require("colors"); //for terminal color

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connected`.bgGreen.white);
  } catch (error) {
    console.log(`Error:${error}`.bgRed.red);
  }
};

module.exports = connectDB;
