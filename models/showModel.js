const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({});

exports.showModel = mongoose.model("shows", showSchema);
