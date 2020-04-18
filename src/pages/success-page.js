import React from "react";
import "./success-page.css";

import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Application Submitted</span>

          <span style={{ textAlign: "center" }}>
            <img
              src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png"
              alt="success icon"
              className="success-img"
            />

            <p>
              Thank you applicant for submitting the required information and
              documents
            </p>
            <p>
              Please wait for the MOHE verification process you will receive an
              email about your application status
            </p>
          </span>
        </div>
        <div className="card-action center">
          <Link to="/application-details">
            <button className="btn pink lighten-1">
              View Application Status
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
