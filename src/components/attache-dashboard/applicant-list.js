import React from "react";
import { Link } from "react-router-dom";

const ApplicantInfo = ({ applicantInfoFull, country }) => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0">
        <ul class="collection with-header">
          <li class="collection-header">
            <h5>
              List of Applicant for the <b> {country}</b>
            </h5>
          </li>

          {applicantInfoFull &&
            applicantInfoFull.map((applicantInfo) => {
              return (
                <li class="collection-item">
                  <span>
                    <b>
                      {applicantInfo.value.englishFirstName}
                      {applicantInfo.value.englishLastName}
                    </b>
                    {" "}
                    <span>
                      {applicantInfo.value.isVerified === "mohe-final-approved"
                        ? "(Approved Already)"
                        : ""}
                    </span>
                  </span>
                  <span style={{ float: "right" }}>
                    <Link
                      to={`/applicant/${applicantInfo.id}`}
                      key={applicantInfo.id}
                    >
                      View Applicant Info
                    </Link>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ApplicantInfo;
