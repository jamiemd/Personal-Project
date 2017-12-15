import React, { Component } from "react";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      logins: "",
      newLogin: ""
    };
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({ newLogin: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    // logins.push(this.state.newLogin);
    this.setState({
      newLogin: ""
      //  logins: logins.push(this.state.newLogin)
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input
            type="text"
            onChange={this.handleInput}
            value={this.newEmail}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            onChange={this.handleInput}
            value={this.newPassword}
          />
        </label>
      </form>
    );
  }
}

export default Signup;
