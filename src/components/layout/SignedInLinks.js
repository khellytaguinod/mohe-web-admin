import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <a onClick={props.signOut}>Log Out</a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {props.profile.initials}
          </NavLink>
          <span>
            As a{" "}
            <b>
              {props.profile.userType &&
                props.profile.userType.toUpperCase().replace(/-/g, " ")}
            </b>
          </span>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
