import React from "react";
import { Link } from "react-router-dom";

const ApplicantInfo = ({ applicantList }) => {
  console.log(applicantList, "look here");
  return (
    <div className="section">
      <div className="card z-depth-0">
        <ul class="collection with-header">
          <li class="collection-header">
            <h5>List of Applicant</h5>
          </li>

          {applicantList &&
            applicantList.map((applicant) => {
              return (
                <li class="collection-item">
                  <span>
                    <b>
                      {applicant.englishFirstName} {applicant.englishLastName}
                    </b>
                  </span>
                  <span style={{ float: "right" }}>
                    <Link to={`/applicant/${applicant.id}`} key={applicant.id}>
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
