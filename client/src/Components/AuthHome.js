import React from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/home.css";

function AuthHome() {
  return (
    <div className="authhome">
      <h1> Home </h1>
      <Link to="/flashcards">Start</Link>
    </div>
  );
}
export default AuthHome;
