import React from "react";
// import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ApplicantInfo = ({ projects }) => {
  console.log(projects, "look here");
  return (
    <div className="project-list section">
      <div className="card z-depth-0">
        <ul class="collection with-header">
          <li class="collection-header">
            <h5>List Of Applicant</h5>
          </li>

          {projects &&
            projects.map((project) => {
              return (
                <li class="collection-item">
                  <span>
                    {" "}
                    Applicant Name:
                    <b>
                      {project.englishFirstName} {project.englishLastName}
                    </b>
                  </span>
                  <span>
                    <Link to={`/applicant/${project.id}`} key={project.id}>
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
