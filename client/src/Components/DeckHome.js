import React from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/DeckHome.css";

function DeckHome() {
  return (
    <div className="deckhome">
      <h1> 1 - 100 </h1>
      <Link to="/flashcards">Start</Link>
    </div>
  );
}

export default DeckHome;
