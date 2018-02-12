import React, { Component } from "react";
import { connect } from "react-redux";
import "./Stylesheets/Flashcards.css";
import { getCards, nextCard, showAnswer } from "../Actions/flashcards";
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
    // console.log("this.props", this.props);
    // console.log(
    //   "this.props.flashcards.currentLanguage",
    //   this.props.flashcards.currentLanguage
    // );
    //get index
    console.log('this.props.flashcards', this.props.flashcards)
    if (this.props.flashcards.data.length === 0) return null; // if no cards then return null
    let currentFlashcard = this.props.flashcards.data[ //shorten
      this.props.flashcards.currentIndex
    ];
    if (currentFlashcard === undefined)
      return (
        <div className="results">
          Results Page<div>
            <Link to="/DeckHome">Home</Link>
          </div>
        </div>
      ); // ran through all cards and return null

    // console.log("currentFlashcard", currentFlashcard.english);
    // console.log(
    //   "this.props.flashcards.currentLanguage",
    //   this.props.flashcards.currentLanguage
    // );
    // console.log(
    //   "this.props.flashcards.cardSide",
    //   this.props.flashcards.cardSide
    // );
    if (this.props.flashcards.cardSide === "front") {
      return (
        <div className="pageWrapper">
          <div className="topWrapper">
            <div className="stats"> {currentFlashcard.id}</div>
          </div>
          <div className="wrapperFlashcard">
            <div className="flashcard" onClick={this.handleCardClick}>
              {currentFlashcard.english}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pageWrapper">
          <div className="topWrapper">
            <div className="stats"> {currentFlashcard.id}</div>
          </div>
          <div className="wrapperFlashcard">
            <div className="flashcard">
              <div className="top">{currentFlashcard.english}</div>
              <div className="divider" />
              <div className="bottom">{currentFlashcard.tagalog}</div>
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
