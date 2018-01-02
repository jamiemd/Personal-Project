import React, { Component } from "react";
import { connect } from "react-redux";
import "./Stylesheets/Flashcards.css";
import { getCards, nextCard, showAnswer } from "../Actions";
import { Link } from "react-router-dom";

class Flashcards extends Component {
  componentDidMount() {
    this.props.getCards();
  }

  handleButtonClick = e => {
    this.props.nextCard();
  };

  handleCardClick = e => {
    // this.props.toggleLanguage();
    this.props.showAnswer();
  };

  render() {
    console.log("this.props", this.props);
    // console.log(
    //   "this.props.flashcards.currentLanguage",
    //   this.props.flashcards.currentLanguage
    // );
    //get index
    if (this.props.flashcards.data.length === 0) return null; // if no cards then return null
    let currentFlashcard = this.props.flashcards.data[ //shorten
      this.props.flashcards.currentIndex
    ];
    if (currentFlashcard === undefined) return;
    null; // ran through all cards and return null
    // <div className="wrapper">
    //   return to deck home{" "}
    //   <div>
    //     <Link to="/deckhome">Deck Home</Link>
    //   </div>
    // </div>
    // console.log("currentFlashcard", currentFlashcard.english);
    // console.log(
    //   "this.props.flashcards.currentLanguage",
    //   this.props.flashcards.currentLanguage
    // );
    console.log(
      "this.props.flashcards.cardSide",
      this.props.flashcards.cardSide
    );
    if (this.props.flashcards.cardSide === "front") {
      return (
        <div className="wrapper">
          <Link to="/">x</Link>
          <div className="flashcard" onClick={this.handleCardClick}>
            {currentFlashcard.english}
          </div>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <Link to="/">x</Link>
          <div className="flashcard">
            {currentFlashcard.english}
            <div>{currentFlashcard.tagalog}</div>
          </div>
          <button className="button" onClick={this.handleButtonClick}>
            No
          </button>
          <button className="button" onClick={this.handleButtonClick}>
            Ok
          </button>
          <button className="button" onClick={this.handleButtonClick}>
            Yes
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { flashcards: state.flashcards };
};

export default connect(mapStateToProps, { getCards, nextCard, showAnswer })(
  Flashcards
);
