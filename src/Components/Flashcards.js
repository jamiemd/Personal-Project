import React, { Component } from "react";
import { connect } from "react-redux";
import "./Flashcards.css";
import { nextCard } from "../Actions";

class Flashcards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: "",
      nextCard: ""
    };
  }

  nextCard = e => {
    this.props.nextCard({});
  };

  render() {
    return (
      <div className="wrapper">
        <div className="image">
          <img src="" alt="card" />
        </div>
        <div className="buttons">
          <button className="button" type="button" onClick={this.handleClick}>
            Bad
          </button>
          <button className="button" type="button">
            Ok
          </button>
          <button className="button" type="button">
            Good
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { flashcards: state.flashcards };
};

export default connect(mapStateToProps)(Flashcards);
