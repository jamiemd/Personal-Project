const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const Flashcards = require("./flashcards.js");

const app = express();
app.use(bodyParser.json());
app.use(CORS());

app.get("/api/flashcards", (req, res) => {
  Flashcards.find({})
    .then(function(flashcards) {
      res.status(200).json(flashcards);
    })
    .catch(function() {
      res.status(500).json({ error: "The information could not be retrieved" });
    });
});

app.get("/api/Flashcards", (req, res) => {
  res.status(200).json(Flashcards);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
