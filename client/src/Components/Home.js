import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStats } from "../Actions/flashcards";
import "./Stylesheets/HomeContainer.css";

class Home extends Component {
  componentDidMount() {
    this.props.getStats();
  }

  render() {
    // console.log('authome', this.props);
    //if auth
    return (
      <div className="homecontainer">
        <h1> Welcome! </h1>
        <Link className="startLink" to="/flashcards">
          Start
        </Link>
        <div />
      </div>
    );

    // return (
    //   <div className="homecontainer">
    //     <h1> WikaKita </h1>
    //     <h2> A Tagalog Flashcard Learning App </h2>
    //     <div className="signuptext"> Sign up today! </div>
    //     <div className="authButtons">
    //       <Link className="button" to="/signin">
    //         Sign In
    //       </Link>
    //       <Link className="button" to="/signup">
    //         Sign Up
    //       </Link>
    //     </div>
    //   </div>
    // );
  }
}

const mapStateToProps = state => {
  return { flashcards: state.flashcards };
};

export default connect(mapStateToProps, { getStats })(Home);
