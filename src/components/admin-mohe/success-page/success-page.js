import React from "react";
import "./success-page.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const SuccessPage = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to="/sign-in" />;

  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Application Forwarded to Attaché</span>

          <span style={{ textAlign: "center" }}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png"
              alt="success icon"
              className="success-img"
            />

            <p>
              The Application was successfully forwarded to the Attaché to view
              and verify. <br /> Please wait for an email notification about the
              Attaché approval status. Thank you.
            </p>
            <br />
            <button
              className="waves-effect waves-light btn dashboard-btn"
              style={{ textAlign: "center" }}
            >
              <Link to={`/mohe-dashboard`}>Back to Dashboard</Link>
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

export default connect(mapStateToProps)(SuccessPage);
