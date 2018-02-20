import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signout } from '../Actions/auth';

class SignOut extends Component {
    componentWillMount() {
        this.props.signout();
    }

    render() {
        return (
            <Link className="link" to="/">Sign Out</Link>
        )
    }
}

export default connect(null, { signout })(SignOut);