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
        <div className="wrapper">
          {/* <div>{this.props.flashcards.currentIndex}</div> */}
          <div className="topWord">{currentFlashcard.english}</div>
          <button className="showAnswerButton" onClick={this.handleCardClick}>Show Answer</button>
        </div >
      );
    } else {
      return (
        <div className="wrapper">
          {/* <div className="stats"> {this.props.flashcards.currentIndex}</div> */}
          <div className="topWord">{currentFlashcard.english}</div>
          <div className="divider" />
          <div className="bottomWord">{currentFlashcard.tagalog}</div>
          <div className="buttons">
            <button className="gradeButtons" onClick={this.handleButtonClick}>No</button>
            <button className="gradeButtons" onClick={this.handleButtonClick}>Ok</button>
            <button className="gradeButtons" onClick={this.handleButtonClick}>Yes</button>
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
