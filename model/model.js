const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  task: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  complete: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("Data", dataSchema);
