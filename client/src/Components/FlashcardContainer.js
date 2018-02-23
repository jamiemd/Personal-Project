import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/FlashcardContainer.css";
import Flashcards from "./Flashcards";
import ResultsPage from "./ResultsPage";
import { connect } from "react-redux";
import { getCards, nextCard, showAnswer, updateBucket, resetCardState } from "../Actions/flashcards";


class FlashcardContainer extends Component {

    componentDidMount() {
        this.props.getCards();
    }

    render() {
        // console.log('container props', this.props.flashcards);

        if (this.props.flashcards.data === null) {
            return (
                null
            )
        };

        if (this.props.flashcards.data === 0) {
            return (
                <div>There are no overdue cards<div>
                    <Link to="/home">Home</Link>
                </div>
                </div>
            )
        } else if (this.props.flashcards.showResultsPage) {
            return (
                <ResultsPage />
            );
        };

        let currentFlashcard = this.props.flashcards.data[this.props.flashcards.currentIndex];
        if (currentFlashcard) {
            return (
                <div >
                    <div className="exitContainer">
                        <Link className="exit" to="/home">X</Link>
                    </div>
                    < Flashcards />
                </div>
            )
        };

        return (<div> no conditions met</div>)
    };

};


const mapStateToProps = state => {
    return { flashcards: state.flashcards };
};

export default connect(mapStateToProps, { getCards, nextCard, showAnswer, updateBucket, resetCardState })(
    FlashcardContainer
);