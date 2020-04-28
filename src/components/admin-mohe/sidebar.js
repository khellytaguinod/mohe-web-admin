import React from "react";
import "./sidebar.css";

import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { profile, setSelectedTab } = props;
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
            MOHE Account of <b>Oman</b>
          </span>
        </div>
        <br />
        <span className="card-title menu-title">System Menu</span>
        <ul className="menu">
          {/* <li className="menu-item active-link"> */}
          <li className="menu-item">
            <i class="material-icons">supervisor_account</i>
            <span class="link" onClick={() => setSelectedTab("ApplicantTab")}>
              <Link to="#">Manage Applicant</Link>
            </span>
          </li>

          <li className="menu-item">
            <i class="material-icons">assignment_ind</i>
            <span class="link" onClick={() => setSelectedTab("AttacheTab")}>
              <Link to="#">Manage Attache</Link>
            </span>
          </li>

          <li className="menu-item">
            <i class="material-icons">description</i>
            <span class="link" onClick={() => setSelectedTab("SystemLogsTab")}>
              <Link to="#">System Logs</Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
