const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    }).then(() => {
        console.log("MongoDB connected successfully");
    }).catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;

