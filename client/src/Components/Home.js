import React from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/home.css";

function Home() {
  return (
    <div className="home">
      <h1> Tagalog Flashcards! </h1>
      <Link to="/DeckHome">Decks</Link>
    </div>
  );
}
export default Home;
