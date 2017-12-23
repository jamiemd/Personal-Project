import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> Tagalog! </h1>
      <Link to="/"> Home</Link>
      <Link to="/flashcards">Decks</Link>
    </div>
  );
}
export default Home;
