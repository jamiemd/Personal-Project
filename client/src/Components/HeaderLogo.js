import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class HeaderLogo extends Component {
    render() {
        if (!this.props.authenticated) {
            return (
                <Link className="link" to="/">WikaKita</Link>
            );
        } else {
            return (
                <Link className="link" to="/home">WikaKita</Link>
            )
        }
    };
};



const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps)(HeaderLogo);
