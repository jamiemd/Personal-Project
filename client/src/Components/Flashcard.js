import React, { Component } from "react";

class Flashcard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div>{this.props.flashcard}</div>;
  }
}

export default Flashcard;
