const mongoose = require("mongoose");

const vipSchema = new mongoose.Schema({
  name: String,
  worth: String,
  birth_year: String,
  source: String,
  country: String,
});

exports.vipModel = mongoose.model("vips", vipSchema);