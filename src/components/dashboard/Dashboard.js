import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { auth, userType, applicationStatus } = this.props;
    if (!auth.uid) return <Redirect to="/sign-in" />;

    if (userType === "applicant" && applicationStatus === "Submitted")
      return <Redirect to="/application-submit-success" />;
    if (userType === "applicant" && applicationStatus === "Unsubmitted")
      return <Redirect to="/create-application" />;

    if (userType === "mohe") return <Redirect to="/mohe-dashboard" />;

    if (userType === "attache") return <Redirect to="/attache-dashboard" />;

    return (
      <div className="dashboard container">
        {/* <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    userType: state.firebase.profile.userType,
    applicationStatus: state.firebase.profile.applicationStatus,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(Dashboard);
