import React, { Component } from "react";
import ApplicantInfo from "./applicant-list";
import Sidebar from "./sidebar";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import ManageAttache from "./manage-attache";

class MOHEDashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/sign-in" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m4">
            {/* <ProjectList projects={projects} /> */}
            <Sidebar />
            {/* <div>lorem</div> */}
          </div>
          <div className="col s12 m8">
            {/* <ApplicantInfo projects={projects} /> */}
            <ManageAttache />
            {/* <div>lorem 2</div> */}
            {/* <Notifications notifications={notifications} /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.applicationForms,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "applicationForms", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(MOHEDashboard);
