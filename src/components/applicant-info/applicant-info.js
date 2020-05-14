import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { db } from "../../config/fbConfig";
import { Link } from "react-router-dom";

import "./applicant-info.css";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { addToVerificationList } from "../../store/actions/add-to-attache-approval";

const dateFormat = require("dateformat");

const ApplicantInfo = (props) => {
  const { applicantInfo, auth, addToVerificationList } = props;
  if (!auth.uid) return <Redirect to="/sign-in" />;

  const [applicantDocument, setApplicantDocument] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    const applicantDetails = {
      applicantName: `${applicantInfo.englishFirstName} ${applicantInfo.englishLastName}`,
      applicantCountry: applicantInfo.birthPlace,
      applicantEmail: applicantInfo.applicantEmail,
      applicantStatus: "attache-approval",
    };

    console.log(applicantDetails, "state here");
    e.preventDefault();
    addToVerificationList(applicantDetails);
  };

  const getApplicantDocuments = (userId) => {
    db.collection("listOfApplications")
      .where("userId", "==", `${userId}`)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          setApplicantDocument(doc.data());
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };

  useEffect(() => {
    getApplicantDocuments(applicantInfo.authorId);
  }, [applicantInfo.authorId]);

  const formatDate = (applicantInfo) => {
    let timestampToDate = applicantInfo.toDate();
    let formattedDate = dateFormat(timestampToDate, "mmmm d, yyyy");
    return formattedDate;
  };

  if (applicantInfo) {
    return (
      <div className="dashboard container">
        <div className="row row-style">
          <div className="col s12 m8">
            <div className="section">
              <div className="card z-depth-0">
                <div className="card-content">
                  <span className="card-title">
                    <h4>Applicant Information</h4>
                  </span>{" "}
                  <br />
                  <ul className="collection with-header">
                    <li className="collection-header">
                      <h6>Personal Information</h6>
                    </li>
                    <li className="collection-item">
                      <div>
                        <span className="table-label">
                          <b>English Name</b>
                        </span>{" "}
                        <br />
                        <span>
                          {applicantInfo.englishFirstName}{" "}
                          {applicantInfo.englishSecondName}{" "}
                          {applicantInfo.englishThirdName}{" "}
                          {applicantInfo.englishLastName}
                        </span>{" "}
                        <br />
                      </div>
                    </li>
                    <li className="collection-item">
                      <div>
                        <span className="table-label">
                          <b>العربية</b>
                        </span>{" "}
                        <br />
                        <span>
                          {applicantInfo.arabicFirstName}{" "}
                          {applicantInfo.arabicSecondName}{" "}
                          {applicantInfo.arabicThirdName}{" "}
                          {applicantInfo.arabicLastName}
                        </span>{" "}
                        <br />
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Nationality</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.nationality}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Birth Date</b>
                          </span>{" "}
                          <br />
                          <span>
                            {formatDate(applicantInfo.birthDate)}
                          </span>{" "}
                          <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Birth Place</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.birthPlace}</span> <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Gender</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.gender}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Religion</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.religion}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Marital Status</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.martialStatus}</span> <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>ID Number</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.idNumber}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>ID Expiry Date</b>
                          </span>{" "}
                          <br />
                          <span>
                            {formatDate(applicantInfo.idExpiryDate)}
                          </span>{" "}
                          <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Passport Number</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.passportNumber}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Passport Issued</b>
                          </span>{" "}
                          <br />
                          <span>
                            {formatDate(applicantInfo.passportIssueDate)}
                          </span>{" "}
                          <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Passport Expiry</b>
                          </span>{" "}
                          <br />
                          <span>
                            {formatDate(applicantInfo.passportExpiryDate)}
                          </span>{" "}
                          <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>HighSchool Certificate</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.hsCertificate}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>HighSchool Average</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.hsAverage}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>HighSchool GPA</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.hsGPA}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Graduation Year</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.hsGraduationYear}</span> <br />
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="collection with-header">
                    <li class="collection-header">
                      <h6>General Information</h6>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Is Employed?</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.employed}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>English Language Exam?</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.takeEnglishExam}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Medical Problems?</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.haveMedicalProblems}</span>{" "}
                          <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Have Disability?</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.disability}</span> <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Number of Awards</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.noOfAward}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Number of HRD Courses</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.noOfHRDCourses}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Number of Inventions</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.noOfInventions}</span> <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Bank Account Number</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.bankAccountNo}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Bank Name</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.bankName}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Country of Bank</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.bankCountry}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Applicant own bank?</b>
                          </span>{" "}
                          <br />
                          <span>
                            {applicantInfo.isBankPersonallyOwned}
                          </span>{" "}
                          <br />
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="collection with-header">
                    <li class="collection-header">
                      <h6>Applicant Academic Information</h6>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Study Location</b>
                          </span>{" "}
                          <br />
                          <span>Inside Oman</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Study Country</b>
                          </span>{" "}
                          <br />
                          <span>Sultanate of Oman</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Study Level</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.studyLevel}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Study Mode</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.studyMode}</span> <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>University</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.university}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>College</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.college}</span> <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Main Major</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.mainMajor}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Sub Major</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.subMajor}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Certificate</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.certificate}</span> <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Study Period</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.studyPeriod}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Expected Graduate Date</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.expGradDate}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Academic year</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.academicYear}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Start Date</b>
                          </span>{" "}
                          <br />
                          <span>
                            {formatDate(applicantInfo.startDate)}
                          </span>{" "}
                          <br />
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="collection with-header">
                    <li class="collection-header">
                      <h6>Contact Information</h6>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Oman Mobile Number</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.omanMobileNo}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Email Address</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.email}</span> <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Region</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.region}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Wilayah</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.wilayah}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Postal Code</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.postalCode}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>PO Box</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.poBox}</span> <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Guardian Name</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.guardianName}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Guardian Address</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.guardianAddress}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Guardian RelationShip</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.guardianRelationship}</span>{" "}
                          <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Guardian Mobile Number In Oman</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.guardianMobileNo}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Guardian Work Location</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.guardianWorkLoc}</span> <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Guardian Work Number</b>
                          </span>{" "}
                          <br />
                          <span>{applicantInfo.guardianWorkNo}</span> <br />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="section">
              <div className="card z-depth-0">
                <div className="card-content">
                  <ul class="collection with-header">
                    <li class="collection-header">
                      <h6>Applicant Documents</h6>
                    </li>
                    <li className="collection-item">
                      <div className="row row-style">
                        <div className="col">
                          <span className="table-label">
                            <b>Passport Copy</b>
                          </span>{" "}
                          <br />
                          {applicantDocument &&
                            applicantDocument.applicantPassportURL && (
                              <a
                                href={applicantDocument.applicantPassportURL}
                                target="_blank"
                              >
                                View passport copy
                              </a>
                            )}
                          <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Personal Photo</b>
                          </span>{" "}
                          <br />
                          {applicantDocument &&
                            applicantDocument.applicantUserPhotoURL && (
                              <a
                                href={applicantDocument.applicantUserPhotoURL}
                                target="_blank"
                              >
                                View personal photo
                              </a>
                            )}
                          <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Travel Details</b>
                          </span>{" "}
                          <br />
                          {applicantDocument &&
                            applicantDocument.applicantTravelDetailsURL && (
                              <a
                                href={
                                  applicantDocument.applicantTravelDetailsURL
                                }
                                target="_blank"
                              >
                                View travel details
                              </a>
                            )}
                          <br />
                        </div>
                        <div className="col">
                          <span className="table-label">
                            <b>Acknowledgement Document</b>
                          </span>{" "}
                          <br />
                          {applicantDocument &&
                            applicantDocument.applicantAcknowledgementDocURL && (
                              <a
                                href={
                                  applicantDocument.applicantAcknowledgementDocURL
                                }
                                target="_blank"
                              >
                                View acknowledgement document
                              </a>
                            )}
                          <br />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="section">
              <div className="card z-depth-0">
                <div className="card-content">
                  <span>Application Status: </span>
                  <br />
                  {applicantDocument && applicantDocument.isVerified ? (
                    ""
                  ) : (
                    <div>
                      <p>
                        <b className="not-verified">Not yet verified </b>{" "}
                        <b>by an Attaché</b>
                      </p>
                      <br />
                      <a
                        class="waves-effect waves-light btn"
                        onClick={() => setShowModal(!showModal)}
                      >
                        Request Verification
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal open={showModal} onClose={() => setShowModal(!showModal)} center>
          <ul class="collection with-header">
            <li class="collection-header">
              <h4>Forward application?</h4>
            </li>
            <li class="collection-item">
              <div>
                <p>
                  This application will now be forwarded to the attache of{" "}
                  <b>{applicantInfo.birthPlace}.</b> This will be view and will
                  verify by the attache if the applicant details and documents
                  are all true and legal.
                </p>
                <br />
                <button
                  className="btn pink lighten-1 z-depth-0"
                  onClick={() => setShowModal(!showModal)}
                >
                  Cancel
                </button>
                <button
                  className="waves-effect waves-light btn forward-btn"
                  style={{ float: "right" }}
                  onClick={(e) => handleSubmit(e)}
                >
                  <Link to={`/mohe-application-forwarded-success`}>
                    Send Application For Verification
                  </Link>
                </button>
              </div>
            </li>
          </ul>
        </Modal>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <div className="card z-depth-0">
          <p>Loading Applicant Details...</p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const applicationForms = state.firestore.data.applicationForms;
  const applicantInfo = applicationForms ? applicationForms[id] : null;
  return {
    applicantInfo: applicantInfo,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToVerificationList: (applicantDetails) =>
      dispatch(addToVerificationList(applicantDetails)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "applicationForms",
      collection: "listOfApplications",
    },
  ])
)(ApplicantInfo);
