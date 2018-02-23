import React, { Component } from "react";
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import "./Stylesheets/HomeContainer.css";
import { signup } from "../Actions/auth";

class SignUp extends Component {

  renderAlert = () => {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };
  handleFormSubmit = ({ username, password, confirmPassword }) => {
    console.log('handleformsubmit called')
    const { history } = this.props;
    this.props.signup(username, password, confirmPassword, history);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="homecontainer">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
          <fieldset>
            <div className="emailPadding">
              <label>Email</label>
            </div>
            <Field name="username" component="input" type="text" />
          </fieldset>
          <fieldset>
            <div>
              <label>Password</label>
            </div>
            <Field name="password" component="input" type="password" />
          </fieldset>
          <fieldset>
            <div>
              <label>Confirm Password</label>
            </div>
            <Field name="confirmPassword" component="input" type="password" />
          </fieldset>
          <button action="submit">Sign Up</button>
          {this.renderAlert()}
        </form >
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    error: state.auth.error
  };
};

SignUp = connect(mapStateToProps, { signup })(SignUp);

export default reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'confirmPassword']
})(SignUp);