import React, { Component } from "react";
import { connect } from "react-redux";
import "./Stylesheets/Flashcards.css";
import { getCards, nextCard, showAnswer } from "../Actions/flashcards";
import { Link } from "react-router-dom";
import FlashcardContainer from "./FlashcardContainer";

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


    // if no cards then return null
    if (this.props.flashcards.data.length === 0) return null;
    let currentFlashcard = this.props.flashcards.data[ //shorten
      this.props.flashcards.currentIndex
    ];
    // if deck of cards are finished then go to results page
    if (currentFlashcard === undefined)
      return (
        <div className="results">
          Results Page<div>
            <Link to="/DeckHome">Home</Link>
          </div>
        </div>
      );

    // if front side of card then return back
    console.log('index', this.props.flashcards.currentIndex);

    if (this.props.flashcards.cardSide === "front") {
      return (
        <div className="topWrapper">
          <FlashcardContainer />
          <div>
            {this.props.flashcards.currentIndex}
          </div>
          <div className="flashcard" onClick={this.handleCardClick}>
            {currentFlashcard.english}
          </div>
        </div >
      );
    } else {
      return (
        <div className="pageWrapper">
          <div className="stats"> {this.props.flashcards.currentIndex}</div>
          <div className="flashcard" className="top">{currentFlashcard.english}</div>
          <div className="divider" />
          <div className="flashcard" className="bottom">{currentFlashcard.tagalog}</div>
          <div className="buttons">
            <button className="button" onClick={this.handleButtonClick}>No</button>
            <button className="button" onClick={this.handleButtonClick}>Ok</button>
            <button className="button" onClick={this.handleButtonClick}>Yes</button>
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
