const express = require("express");

const { Modle } = require("./Modle/user.modle");
var jwt = require("jsonwebtoken");
const { connection } = require("./db");
require("dotenv").config();
var randomWords = require("random-words");
const cors = require("cors");

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("MASAI WORD GAME");
});

app.post("/adduser", async (req, res) => {
  const { name, difficulty } = req.body;
  try {
    const new_play = new Modle({
      name,
      difficulty,
    });
    await new_play.save();

    var token = jwt.sign({ Name: name, Diff: difficulty }, "12345");
    res.send({ msg: `Token ${token}` });
  } catch (err) {
    res.send({ msg: err });
  }
});

app.get("/playzone", async (req, res) => {
  const token = req.headers?.authorization?.split(" ")[1];
  try {
    var decoded = jwt.verify(token, "12345");

    let user_name = decoded.Name;
    let user_diff = decoded.Diff;
    let random = randomWords();

    res.send({ user_name, user_diff, random });
  } catch (err) {
    res.send({ msg: err });
  }
});

app.get("/getuser", async (req, res) => {
  try {
    const mark_play = await Modle.find({});
    res.send({ mark_play });
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, async () => {
  try {
    await connection;
  } catch (err) {
    console.log(err);
  }

  console.log("Active");
});
