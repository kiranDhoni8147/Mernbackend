// backend/models/BookNow.js
const mongoose = require("mongoose");

const ContactNowSchema = new mongoose.Schema({
  car:{
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
  },
  inquiryType: {
    type: String,
    required: true,
  },
  message:{
    type: String,
    required: true,
  }
  
});

module.exports = mongoose.model("ContactNow",ContactNowSchema );
