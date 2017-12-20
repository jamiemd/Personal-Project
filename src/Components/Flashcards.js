import React, { Component } from "react";
import { connect } from "react-redux";
import "./Stylesheets/Flashcards.css";
import { getCards, nextCard } from "../Actions";
import { Data } from "../Data";

class Flashcards extends Component {
  componentDidMount() {
    this.props.getCards();
  }

  handleButtonClick = e => {};

  handleCardClick = e => {};

  render() {
    return (
      <div className="wrapper">
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
