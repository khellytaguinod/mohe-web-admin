import React, { useState } from "react";
import ApplicantInfo from "./applicant-list";
import Sidebar from "./sidebar";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import Notifications from "../dashboard/Notifications";
import ManageAttache from "./manage-attache";

const MOHEDashboard = (props) => {
  const { profile, auth, notifications, projects } = props;
  if (!auth.uid) return <Redirect to="/sign-in" />;

  const [selectedTab, setSelectedTab] = useState("ApplicantTab");

  console.log(selectedTab, "here");

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m4">
          <Sidebar setSelectedTab={setSelectedTab} profile={profile} />
        </div>
        <div className="col s12 m8">
          {selectedTab === "ApplicantTab" ? (
            <ApplicantInfo projects={projects} />
          ) : null}
          {selectedTab === "AttacheTab" ? <ManageAttache /> : null}
          {selectedTab === "SystemLogsTab" ? (
            <Notifications notifications={notifications} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.applicationForms,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "applicationForms", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 50, orderBy: ["time", "desc"] },
  ])
)(MOHEDashboard);
