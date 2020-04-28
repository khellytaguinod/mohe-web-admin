import React from "react";
import "./sidebar.css";

import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { profile } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div style={{ padding: "10px" }}>
          <span>Good Day</span>
          <br />
          <h5
            style={{ margin: "18px 0px 0px 0px", textTransform: "capitalize" }}
          >
            {profile.firstName} {profile.lastName}
            <br />
          </h5>

          <span>
            Attache of <b>{profile.country}</b>
          </span>
        </div>
        <br />
        <span className="card-title menu-title">System Menu</span>
        <ul className="menu">
          <li className="menu-item active-link">
            <i class="material-icons">supervisor_account</i>
            <span class="link">
              <Link to="/upload-documents">Manage Applicant</Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
