import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/FlashcardContainer.css";
import Flashcards from "./Flashcards";


class FlashcardContainer extends Component {
    render() {
        return (
            <div className="cardContainer">
                <div className="exitContainer">
                    <Link className="exit" to="/home">X</Link>
                </div>
                <Flashcards />
            </div>
        )
    }
}

export default FlashcardContainer;