const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  difficulty: { type: String, required: true },
});

const Modle = mongoose.model("play", Schema);

module.exports = { Modle };
