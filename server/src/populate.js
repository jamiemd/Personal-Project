const fs = require("fs");

let savedCards = null;

const readCards = () => {
  if (!savedCards) {
    const contents = fs.readFilesSync("flashcards.json", "utf8");
    savedCards = JSON.parse(contents);
  }
  return savedPosts;
};

// const populateCards = () => {
//   const allCards = readCards();
//   const promises = allCards.map(p => new Post(p).save());
//   return Promise.all(promises);
// };
