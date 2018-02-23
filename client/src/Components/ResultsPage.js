import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { resetCardState } from "../Actions/flashcards";

class ResultsPage extends Component {

    handleHomeClick = e => {
        this.props.resetCardState();
    }

    render() {
        console.log('results this.props', this.props);

        return (
            <div className="results" >
                Results Page
          <div>
                    <Link to="/home" onClick={this.handleHomeClick}>Home</Link>
                </div >
                {/* <div>{this.props.flashcards.counter} cards out of */}
                {/* {this.props.flashcards.data.length} correct</div> */}
            </div >
        );
    }
}


const mapStateToProps = state => {
    return { flashcards: state.flashcards };
};

export default connect(mapStateToProps, { resetCardState })(ResultsPage);
