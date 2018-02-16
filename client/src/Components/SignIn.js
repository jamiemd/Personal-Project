import React, { Component } from "react";
import "./Stylesheets/loginsignup.css";
import { reduxForm, Field } from 'redux-form';
import { signin } from '../Actions/auth';
import { connect } from 'react-redux';

class SignIn extends Component {
  handleFormSubmit({ email, password }) {
    this.props.login(email, password, this.props.history);
  }

  renderAlert() {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <label>Email:</label>
          <Field name="email" component="input" type="text" />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field name="password" component="input" type="password" />
        </fieldset>
        <button action="submit">Sign In</button>
        {this.renderAlert()}
      </form>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated
  };
};

SignIn = connect(mapStateToProps, { signin })(SignIn);

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(SignIn);