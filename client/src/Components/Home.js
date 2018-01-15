import React from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/home.css";

function Home() {
  return (
    <div className="home">
      <h1> Flashcards </h1>
      <Link to="/DeckHome">1 -100</Link>
    </div>
  );
}
export default Home;
