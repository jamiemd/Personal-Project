import React from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/home.css";

function Home() {
  return (
    <div className="home">
      <h1> Tagalog! </h1>
      <Link to="/flashcards">Deck 1</Link>
    </div>
  );
}
export default Home;
