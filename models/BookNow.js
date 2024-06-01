// backend/models/BookNow.js
const mongoose = require("mongoose");

const BookNowSchema = new mongoose.Schema({
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
  address: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  termsAgreed: {
    type: Boolean,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BookNow", BookNowSchema);
