
const mongoose = require("mongoose");

const AssistanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Assistance",AssistanceSchema );
