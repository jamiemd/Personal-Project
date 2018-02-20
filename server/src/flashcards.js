const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/flashcards", { useMongoClient: true });

const FlashcardSchema = new mongoose.Schema({
  english: {
    type: String,
    required: true
  },
  tagalog: {
    type: String,
    required: true
  },
  bucket: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Flashcard", FlashcardSchema);
