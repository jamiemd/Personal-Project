import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/FlashcardContainer.css";


class FlashcardContainer extends Component {
    render() {
        return (
            <div className="cardContainer">
                <Link className="exit" to="/home">X</Link>
            </div>
        )
    }
}

export default FlashcardContainer;