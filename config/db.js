const mongoose = require("mongoose"); //impor
const colors = require("colors"); //for terminal color

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URl);
    console.log(`Database connected`.bgGreen.white);
  } catch (error) {
    console.log(`Error:${error}`.bgRed.red);
  }
};

module.exports = connectDB;
