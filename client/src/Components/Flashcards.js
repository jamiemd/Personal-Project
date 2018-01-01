import React, { Component } from "react";
import { connect } from "react-redux";
import "./Stylesheets/Flashcards.css";
import { getCards, nextCard, toggleLanguage } from "../Actions";

class Flashcards extends Component {
  componentDidMount() {
    this.props.getCards();
  }

  handleButtonClick = e => {
    this.props.nextCard();
  };

  handleCardClick = e => {
    this.props.toggleLanguage();
  };

  render() {
    // console.log("this.props", this.props);
    //get index
    if (this.props.flashcards.data.length === 0) return null; // if no cards then return null
    let currentFlashcard = this.props.flashcards.data[
      this.props.flashcards.currentIndex
    ];
    console.log("currentFlashcard", currentFlashcard);
    console.log(
      "this.props.flashcards.currentLanguage",
      this.props.flashcards.currentLanguage
    );

    return (
      <div className="wrapper">
        <div className="flashcard" onClick={this.handleCardClick}>
          {currentFlashcard[this.props.flashcards.currentLanguage]}
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

const mapStateToProps = state => {
  return { flashcards: state.flashcards };
};

export default connect(mapStateToProps, { getCards, nextCard, toggleLanguage })(
  Flashcards
);
