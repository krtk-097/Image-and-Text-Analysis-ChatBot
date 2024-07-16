const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  imageText: String,
  inputText: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Result", ResultSchema);
