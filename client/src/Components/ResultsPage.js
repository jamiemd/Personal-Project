import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Stylesheets/ResultsPage.css";
import { resetCardState, correctAnswerCount } from "../Actions/flashcards";

class ResultsPage extends Component {

    handleHomeClick = e => {
        this.props.resetCardState();
    }

    render() {
        console.log('results this.props', this.props);

        return (
            <div className="results" >
                <div>
                    <Link to="/home" onClick={this.handleHomeClick}>Home</Link>
                </div >
                <div className="text">
                    <div className="numberCorrect">{this.props.flashcards.correctAnswerCount}</div>
                    <div className="centerText"> out of </div>
                    <div className="total">{this.props.flashcards.data.length}</div>
                </div >
                <div classname="correctText">Correct</div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { flashcards: state.flashcards };
};

export default connect(mapStateToProps, { resetCardState, correctAnswerCount })(ResultsPage);
