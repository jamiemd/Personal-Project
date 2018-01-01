const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(CORS());

const flashcards = [
  {
    id: "1",
    english: "hello",
    tagalog: "kamusta"
  },
  {
    id: "2",
    english: "name",
    tagalog: "pangalan"
  },
  {
    id: "3",
    english: "smart",
    tagalog: "matalino"
  },
  {
    id: "4",
    english: "beautiful",
    tagalog: "maganda"
  },
  {
    id: "5",
    english: "handsome",
    tagalog: "guapo"
  }
];

app.get("/api/flashcards", (req, res) => {
  res.status(200).json(flashcards);
});

app.get("/api/flashcards", (req, res) => {
  res.status(200).json(flashcards);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});

module.exports = { flashcards, app };
