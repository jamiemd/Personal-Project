import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { signin } from "../../Actions/auth";
import { connect } from "react-redux";

class SignIn extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signin(email, password, this.props.history);
  }

  renderAlert() {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="homecontainer">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset>
            <div className="emailPadding">
              <label>Email</label>
            </div>
            <Field name="email" component="input" type="text" />
          </fieldset>
          <fieldset>
            <div>
              <label>Password</label>
            </div>
            <Field name="password" component="input" type="password" />
          </fieldset>
          <button action="submit">Sign In</button>
          {this.renderAlert()}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated
  };
};

SignIn = connect(mapStateToProps, { signin })(SignIn);

export default reduxForm({
  form: "signin",
  fields: ["email", "password"]
})(SignIn);
