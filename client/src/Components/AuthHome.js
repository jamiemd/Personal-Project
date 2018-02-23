import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStats } from "../Actions/flashcards";
import "./Stylesheets/home.css";

class AuthHome extends Component {

  componentDidMount() {
    this.props.getStats();
  }

  render() {
    console.log('authome', this.props);
    return (
      <div className="authhome" >
        <h1> Home </h1>
        <Link to="/flashcards">Start</Link>
        <div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { flashcards: state.flashcards };
};

export default connect(mapStateToProps, { getStats })(AuthHome);
