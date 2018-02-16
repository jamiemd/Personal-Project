import React from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/home.css";

function AuthHome() {
  return (
    <div className="authhome">
      <h1> Decks </h1>
      <Link to="/deckhome">Days of the Week</Link>
    </div>
  );
}
export default AuthHome;
