const express = require("express");

// const { UserModle } = require("./Modle/User.modle");
const { BmiModle } = require("./Modle/Emi.modle");
const { connection } = require("./db");
require("dotenv").config();
// const bcrypt = require("bcrypt");
// var jwt = require("jsonwebtoken");
const cors = require("cors");

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is Api for Shopping List App");
});

app.post("/addlist", async (req, res) => {
  const { title, quantity, priority, description } = req.body;
  try {
    const new_bmi = new BmiModle({
      title,
      quantity,
      priority,
      description,
    });
    await new_bmi.save();

    res.send({ msg: "Data dadded" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "no" });
  }
});

app.get("/getlist", async (req, res) => {
  const bmi_data = await BmiModle.find({});

  res.send({ bmi_data });
});

app.listen(port, async () => {
  try {
    await connection;
  } catch (err) {
    console.log(err);
  }

  console.log("Active");
});
