import React from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/HomeContainer.css";

function UnAuthHome() {
    return (
        <div className="homecontainer">
            <h1> WikaKita </h1>
            <h2> A Tagalog Flashcard Learning App </h2>
            <div className="signuptext"> Sign up today! </div>
            <div className="authButtons">
                <Link className="button" to="/signin">Sign In</Link>
                <Link className="button" to="/signup">Sign Up</Link>
            </div>
        </div>
    );
}
export default UnAuthHome;
