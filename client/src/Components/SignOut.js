import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signout } from '../Actions/auth';

class SignOut extends Component {
    handleSignOut() {
        console.log('signout', this.props.history)
        this.props.signout(this.props.history);
    }

    render() {
        return (
            <Link onClick={this.handleSignOut} className="headerLink" to="/">Sign Out</Link>
        )
    }
}


const mapStateToProps = state => {
    return {
        error: state.auth.error,
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps, { signout })(SignOut);
