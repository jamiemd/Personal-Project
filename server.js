const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const flashcards = [
  {
    id: 0,
    english_word: "",
    tagalog_word: "Francis Ford Coppola"
  },
  {
    id: 1,
    title: "Star Wars",
    english_word: "The Godfather",
    tagalog_word: "Francis Ford Coppola"
  },
  {
    id: 2,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    english_word: "The Godfather",
    tagalog_word: "Francis Ford Coppola"
  }
];
