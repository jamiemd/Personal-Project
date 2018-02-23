import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStats } from "../Actions/flashcards";
import "./Stylesheets/HomeContainer.css";

class AuthHome extends Component {

  componentDidMount() {
    this.props.getStats();
  }

  render() {
    // console.log('authome', this.props);
    return (
      <div className="homecontainer" >
        <h1> Welcome! </h1>
        <Link className="startLink" to="/flashcards">Start</Link>
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
