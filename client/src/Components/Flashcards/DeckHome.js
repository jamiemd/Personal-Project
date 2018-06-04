import React from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/DeckHome.css";

function DeckHome() {
  return (
    <div className="deckhome">
      <Link to="/home">X</Link>
      <h1> Days of the Week </h1>
      <Link to="/flashcards">Start</Link>
    </div>
  );
}

export default DeckHome;

// lists stats