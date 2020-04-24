import React from "react";
import "./sidebar.css";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        {/* <div className="card-content"> */}
        <br/>
        <span className="card-title menu-title">System Menu</span>
        {/* <span class="menu-title">System Menu</span> */}
        <ul className="menu">
          <li className="menu-item active-link">
            <i class="material-icons">supervisor_account</i>
            <span class="link">
              <Link to="/upload-documents">Manage Applicant</Link>
            </span>
          </li>

          <li className="menu-item">
            <i class="material-icons">assignment_ind</i>
            <span class="link">
              <Link to="/upload-documents">Manage Attache</Link>
            </span>
          </li>

          <li className="menu-item">
            <i class="material-icons">description</i>
            <span class="link">
              <Link to="/upload-documents">System Logs</Link>
            </span>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
