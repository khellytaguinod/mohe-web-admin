import React, { useEffect, useState } from "react";

import ApplicantInfo from "./applicant-list";
import Sidebar from "./sidebar";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import { db } from "../../config/fbConfig";

const AttacheDashboard = (props) => {
  const { projects, auth, country, profile } = props;
  if (!auth.uid) return <Redirect to="/sign-in" />;

  const [applicantDocument, setApplicantDocument] = useState([]);

  const getApplicantDocuments = (country) => {
    db.collection("applicationForms")
      .where("birthPlace", "==", `${country}`)
      .where("isVerified", "==", `attache-waiting`)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());

          setApplicantDocument((applicantDocument) => [
            ...applicantDocument,
            { value: doc.data(), id: doc.id },
          ]);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };

  useEffect(() => {
    getApplicantDocuments(country);
  }, [country]);

  if (projects) {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m4">
            <Sidebar profile={profile} />
          </div>
          <div className="col s12 m8">
            {applicantDocument.length >= 0 ? (
              <ApplicantInfo
                applicantInfoFull={applicantDocument}
                country={country}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.applicationForms,
    auth: state.firebase.auth,
    country: state.firebase.profile.country,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "applicationForms",
      // orderBy: ["createdAt", "desc"],
    },
  ])
)(AttacheDashboard);
