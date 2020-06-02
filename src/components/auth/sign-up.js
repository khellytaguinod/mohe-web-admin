import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp, clearSignUpPageMsg } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userType: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state, "state here");
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError, clearSignUpPageMsg } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    let disabled = Object.values(this.state).every(
      (o) => o !== "" && o !== null
    );

    if (authError) {
      setTimeout(function () {
        clearSignUpPageMsg();
      }, 3000);
    }

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <select
              class="browser-default"
              id="userType"
              onChange={this.handleChange}
            >
              <option value="" disabled selected>
                Choose user type
              </option>
              <option value="applicant">Applicant</option>
              <option value="mohe">Mohe</option>
              {/* <option value="attache">Attache</option> */}
              {/* <option value="ministry-of-educ-abroad">
                Ministry of Educ Abroad
              </option> */}
            </select>
          </div>
          <div className="input-field">
            <button
              disabled={!disabled}
              className="btn pink lighten-1 z-depth-0"
            >
              Sign Up
            </button>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
    clearSignUpPageMsg: () => dispatch(clearSignUpPageMsg()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
