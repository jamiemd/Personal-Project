import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HeaderLogo extends Component {
  render() {
    console.log(this.props);
    if (!this.props.authenticated) {
      return (
        <Link className="headerLink" to="/">
          WikaKita
        </Link>
      );
    } else {
      return (
        <Link className="headerLink" to="/home">
          WikaKita
        </Link>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(HeaderLogo);
