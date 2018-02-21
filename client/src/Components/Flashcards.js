import React, { Component } from "react";
import { connect } from "react-redux";
import "./Stylesheets/Flashcards.css";
import { getCards, nextCard, showAnswer, updateBucket } from "../Actions/flashcards";
import { Link } from "react-router-dom";

class Flashcards extends Component {

  componentDidMount() {
    this.props.getCards();
  }

  handleNoButtonClick = e => {
    this.props.nextCard();
    let dateNow = new Date();
    let newDate = dateNow.setDate(dateNow.getDate() + 1);

    let currentFlashcard = this.props.flashcards.data[this.props.flashcards.currentIndex];
    let newBucket;
    if (currentFlashcard.currentBucket <= 1) {
      newBucket = 1;
    } else {
      newBucket = currentFlashcard.currentBucket - 1;
    }
    this.props.updateBucket(currentFlashcard._id, newBucket, newDate);
  };

  handleYesButtonClick = e => {
    this.props.nextCard();

    let dateNow = new Date();
    let newDate = dateNow.setDate(dateNow.getDate() + 1);

    let currentFlashcard = this.props.flashcards.data[this.props.flashcards.currentIndex];
    let newBucket;
    if (currentFlashcard.currentBucket >= 5) {
      newBucket = 5;
    } else {
      newBucket = currentFlashcard.currentBucket + 1;
    }
    this.props.updateBucket(currentFlashcard._id, newBucket, newDate);
  };

  handleCardClick = e => {
    // this.props.toggleLanguage();
    this.props.showAnswer();
  };

  render() {
    console.log('this.props', this.props);

    // if no cards then return null

    if (this.props.flashcards.data.length === 0) return null;
    let currentFlashcard = this.props.flashcards.data[this.props.flashcards.currentIndex];

    // if deck of cards are finished then go to results page
    if (currentFlashcard === undefined)
      return (
        <div className="results">
          Results Page<div>
            <Link to="/home">Home</Link>
          </div>
        </div>
      );

    // if front side of card then return back
    // console.log('index', this.props.flashcards.currentIndex);

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
            <button className="gradeButtons" onClick={this.handleNoButtonClick}>No</button>
            {/* <button className="gradeButtons" onClick={this.handleButtonClick}>Ok</button> */}
            <button className="gradeButtons" onClick={this.handleYesButtonClick}>Yes</button>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { flashcards: state.flashcards };
};

export default connect(mapStateToProps, { getCards, nextCard, showAnswer, updateBucket })(
  Flashcards
);
