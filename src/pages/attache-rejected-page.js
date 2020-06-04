import React from "react";
import "./success-page.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const RejectedPageAttache = (props) => {
  const { auth } = props;

  if (!auth.uid) return <Redirect to="/sign-in" />;

  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Application Approved</span>

          <span style={{ textAlign: "center" }}>
            <img
              src="https://www.onlygfx.com/wp-content/uploads/2016/09/red-rejected-stamp-4.png"
              alt="success icon"
              className="success-img"
            />
            <br />
            <p>The Applicant Application was marked rejected.</p>
            <br />
            <p>
              The MOHE of Oman will be able to see your decision to help decide
              about the applicant approval.
            </p>
            <br />
            <br />
            <button
              className="waves-effect waves-light btn dashboard-btn"
              style={{ textAlign: "center" }}
            >
              <Link to={`/`}>Back to Dashboard</Link>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(RejectedPageAttache);
