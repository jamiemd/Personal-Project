import React, { Component } from "react";
import { connect } from "react-redux";
import "./Stylesheets/Flashcards.css";
import { getCards, nextCard } from "../Actions";
import { Data } from "../Data";

class Flashcards extends Component {
  componentDidMount() {
    this.props.getCards();
  }

  handleButtonClick = e => {
    this.props.nextCard();
  };

  handleCardClick = e => {};

  render() {
    console.log("this.props.flashcards", this.props.flashcards);

    if (this.props.flashcards.data.length === 0) return null;
    const currentFlashcard = this.props.flashcards.data[
      this.props.flashcards.currentIndex
    ];
    console.log("currentFlashcard", currentFlashcard);

    return (
      <div className="wrapper">
        <div className="flashcard">{currentFlashcard.english}</div>
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

const mapStateToProps = state => {
  return { flashcards: state.flashcards };
};

export default connect(mapStateToProps, { getCards, nextCard })(Flashcards);
