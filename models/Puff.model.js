const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const puffSchema = new Schema({
  name: String,
  description: String,
  // owner will be added later on
});

module.exports = model("Puff", puffSchema);
