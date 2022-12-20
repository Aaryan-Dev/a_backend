const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose.connect(
  `mongodb+srv://a:a@cluster0.mmdpraq.mongodb.net/myGame`
);

module.exports = { connection };
