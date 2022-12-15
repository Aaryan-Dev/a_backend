const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose.connect(
  // `mongodb+srv://nobody:${process.env.MONGO_PASSWORD}@cluster0.il2clvz.mongodb.net/bmi`
  "mongodb+srv://surya:surya123@cluster0.egl1mnc.mongodb.net/MOCK10"
);

module.exports = { connection };
