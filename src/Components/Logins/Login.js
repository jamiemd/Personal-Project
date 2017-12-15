import React, { Component } from 'react';
import './loginsignup.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPw: ''
    };
  }

  handleEmailInput = (event) => {
    this.setState({userEmail: event.target.value })
  };

  handlePwInput = (event) => {
    this.setState({userPw: event.target.value })
  };


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      userEmail: '', 
      userPw: ''
    })
    this.props.onLogin();
  }


  render () {
    return (
      <div className="containerStyle">
        <form onSubmit={this.handleSubmit}> 
          <div className="labels">
            Email
          </div>
          <div>
            <input type="text" onChange={this.handleEmailInput} value={this.state.userEmail}/> 
          </div>
          <div className="labels">
            Password
          </div>
          <div>
            <input type="text" onChange={this.handlePwInput} value={this.state.userPw}/>
          </div>
          <button>
            Login
          </button>
        </form>
      </div>
      )
  }


}

export default Login;
