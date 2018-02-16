import React from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/home.css";

function UnAuthHome() {
    return (
        <div className="home">
            <h1> WikaKita </h1>
            <h2> A Tagalog Flashcard Learning App </h2>
            <div className="authButtons">
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
}
export default UnAuthHome;
