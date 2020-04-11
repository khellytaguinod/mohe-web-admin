import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

import { Redirect, Link } from "react-router-dom";

import { connect } from "react-redux";

import { submitApplicantUploadedData } from "../../store/actions/submittedApplicationActions";

class FilesUploader extends Component {
  state = {
    finalPassportPhotoURL: "",
    finalUserPhotoURL: "",
    finalAcademicReportURL: "",
    finalTravelDetailsURL: "",
    finalAcknowledgementDocumentURL: "",
  };

  state = {
    passportIsUploading: false,
    passportUploadProcess: 0,
    passportPhotoURL: "",
  };

  state = {
    userPhotoIsUploading: false,
    userPhotoUploadProcess: 0,
    userPhotoURL: "",
  };

  state = {
    academicReportIsUploading: false,
    academicReportUploadProcess: 0,
    academicReportURL: "",
  };

  state = {
    travelDetailsIsUploading: false,
    travelDetailsUploadProcess: 0,
    travelDetailsURL: "",
  };

  state = {
    acknowledgementDocumentIsUploading: false,
    acknowledgementDocumentUploadProcess: 0,
    acknowledgementDocumentURL: "",
  };

  state = {
    yesToDeclaration: false,
  };

  setCheckbox = (e) => {
    this.setState({
      yesToDeclaration: e.target.checked,
    });
  };

  // passport photos handlers

  passportHandleUploadStart = () =>
    this.setState({ passportIsUploading: true, passportUploadProcess: 0 });

  passportHandleProgress = (passportUploadProcess) =>
    this.setState({ passportUploadProcess });

  passportHandleUploadError = (error) => {
    this.setState({ passportIsUploading: false });
    console.error(error);
  };

  passportHandleUploadSuccess = (filename) => {
    this.setState({
      passportUploadProcess: 100,
      passportIsUploading: false,
    });
    firebase
      .storage()
      .ref("passport-copy")
      .child(filename)
      .getDownloadURL()
      .then((url) =>
        this.setState({ passportPhotoURL: url, finalPassportPhotoURL: url })
      );
  };

  //  user photo handlers

  userPhotoHandleUploadStart = () =>
    this.setState({ userPhotoIsUploading: true, userPhotoUploadProcess: 0 });

  userPhotoHandleProgress = (userPhotoUploadProcess) =>
    this.setState({ userPhotoUploadProcess });

  userPhotoHandleUploadError = (error) => {
    this.setState({ userPhotoIsUploading: false });
    console.error(error);
  };

  userPhotoHandleUploadSuccess = (filename) => {
    this.setState({
      userPhotoUploadProcess: 100,
      userPhotoIsUploading: false,
    });
    firebase
      .storage()
      .ref("user-personal-photo")
      .child(filename)
      .getDownloadURL()
      .then((url) =>
        this.setState({ userPhotoURL: url, finalUserPhotoURL: url })
      );
  };

  // academic report

  academicReportHandleUploadStart = () =>
    this.setState({
      academicReportIsUploading: true,
      academicReportUploadProcess: 0,
    });

  academicReportHandleUploadError = (error) => {
    this.setState({ academicReportIsUploading: false });
    console.error(error);
  };

  academicReportHandleProgress = (academicReportUploadProcess) =>
    this.setState({ academicReportUploadProcess });

  academicReportHandleUploadSuccess = (filename) => {
    this.setState({
      academicReportUploadProcess: 100,
      academicReportIsUploading: false,
    });
    firebase
      .storage()
      .ref("academic-report")
      .child(filename)
      .getDownloadURL()
      .then((url) =>
        this.setState({ academicReportURL: url, finalAcademicReportURL: url })
      );
  };

  // travel details

  travelDetailsHandleUploadStart = () =>
    this.setState({
      travelDetailsIsUploading: true,
      travelDetailsUploadProcess: 0,
    });

  travelDetailsHandleUploadError = (error) => {
    this.setState({ travelDetailsIsUploading: false });
    console.error(error);
  };

  travelDetailsHandleProgress = (travelDetailsUploadProcess) =>
    this.setState({ travelDetailsUploadProcess });

  travelDetailsHandleUploadSuccess = (filename) => {
    this.setState({
      travelDetailsUploadProcess: 100,
      travelDetailsIsUploading: false,
    });
    firebase
      .storage()
      .ref("trave-details")
      .child(filename)
      .getDownloadURL()
      .then((url) =>
        this.setState({ travelDetailsURL: url, finalTravelDetailsURL: url })
      );
  };

  // acknowledgement Document

  acknowledgementDocumentHandleUploadStart = () =>
    this.setState({
      acknowledgementDocumentIsUploading: true,
      acknowledgementDocumentUploadProcess: 0,
    });

  acknowledgementDocumentHandleUploadError = (error) => {
    this.setState({ acknowledgementDocumentIsUploading: false });
    console.error(error);
  };

  acknowledgementDocumentHandleProgress = (
    acknowledgementDocumentUploadProcess
  ) => this.setState({ acknowledgementDocumentUploadProcess });

  acknowledgementDocumentHandleUploadSuccess = (filename) => {
    this.setState({
      acknowledgementDocumentUploadProcess: 100,
      acknowledgementDocumentIsUploading: false,
    });
    firebase
      .storage()
      .ref("acknowledgement-document")
      .child(filename)
      .getDownloadURL()
      .then((url) =>
        this.setState({
          acknowledgementDocumentURL: url,
          finalAcknowledgementDocumentURL: url,
        })
      );
  };

  render() {
    const { auth, profile } = this.props;

    if (!auth.uid) return <Redirect to="/" />;
    let randomNumbers = Math.floor(Math.random() * 8) + 1;

    let applicantFilesURL = {
      applicantPassportURL: this.state.finalPassportPhotoURL,
      applicantUserPhotoURL: this.state.finalUserPhotoURL,
      applicantAcademicReportURL: this.state.finalAcademicReportURL,
      applicantTravelDetailsURL: this.state.finalTravelDetailsURL,
      applicantAcknowledgementDocURL: this.state
        .finalAcknowledgementDocumentURL,
    };

    const handleSubmit = (e) => {
      console.log("submitting uploaded data");
      this.props.submitApplicantUploadedData(applicantFilesURL);
    };

    return (
      <div>
        <label>Passport Copy lorem:</label>

        <FileUploader
          accept="image/jpeg,image/png,application/pdf,.doc, .docx"
          name="avatar"
          filename={`${profile.firstName}-${profile.lastName}-passport-copy-${randomNumbers}`}
          storageRef={firebase.storage().ref("passport-copy")}
          onUploadStart={this.passportHandleUploadStart}
          onUploadError={this.passportHandleUploadError}
          onUploadSuccess={this.passportHandleUploadSuccess}
          onProgress={this.passportHandleProgress}
        />
        <br />
        {this.state.passportIsUploading && (
          <p>Your file is uploading please wait</p>
        )}
        <br />
        {this.state.passportPhotoURL && (
          <a href={this.state.passportPhotoURL} target="_blank">
            Click to view your uploaded file
          </a>
        )}
        <br />
        <br />
        <label>Personal Photo:</label>

        <FileUploader
          accept="image/jpeg,image/png,application/pdf,.doc, .docx"
          name="avatar"
          filename={`${profile.firstName}-${profile.lastName}-user-personal-photo-${randomNumbers}`}
          storageRef={firebase.storage().ref("user-personal-photo")}
          onUploadStart={this.userPhotoHandleUploadStart}
          onUploadError={this.userPhotoHandleUploadError}
          onUploadSuccess={this.userPhotoHandleUploadSuccess}
          onProgress={this.userPhotoHandleProgress}
        />
        <br />
        {this.state.userPhotoIsUploading && (
          <p>Your file is uploading please wait</p>
        )}
        <br />
        {this.state.userPhotoURL && (
          <a href={this.state.userPhotoURL} target="_blank">
            Click to view your uploaded file
          </a>
        )}
        <br />
        <br />
        <label>Academic Report:</label>
        <FileUploader
          accept="image/jpeg,image/png,application/pdf,.doc, .docx"
          name="avatar"
          filename={`${profile.firstName}-${profile.lastName}-academic-report-${randomNumbers}`}
          storageRef={firebase.storage().ref("academic-report")}
          onUploadStart={this.academicReportHandleUploadStart}
          onUploadError={this.academicReportHandleUploadError}
          onUploadSuccess={this.academicReportHandleUploadSuccess}
          onProgress={this.academicReportHandleProgress}
        />
        <br />
        {this.state.academicReportIsUploading && (
          <p>Your file is uploading please wait</p>
        )}
        <br />
        {this.state.academicReportURL && (
          <a href={this.state.academicReportURL} target="_blank">
            Click to view your uploaded file
          </a>
        )}
        <br />
        <br />
        <label>Travel Details</label>
        <FileUploader
          accept="image/jpeg,image/png,application/pdf,.doc, .docx"
          name="avatar"
          filename={`${profile.firstName}-${profile.lastName}-trave-details-${randomNumbers}`}
          storageRef={firebase.storage().ref("trave-details")}
          onUploadStart={this.travelDetailsHandleUploadStart}
          onUploadError={this.travelDetailsHandleUploadError}
          onUploadSuccess={this.travelDetailsHandleUploadSuccess}
          onProgress={this.travelDetailsHandleProgress}
        />
        <br />
        {this.state.travelDetailsIsUploading && (
          <p>Your file is uploading please wait</p>
        )}
        <br />
        {this.state.travelDetailsURL && (
          <a href={this.state.travelDetailsURL} target="_blank">
            Click to view your uploaded file
          </a>
        )}

        <br />
        <br />
        <label>acknowledgement Document</label>
        <FileUploader
          accept="image/jpeg,image/png,application/pdf,.doc, .docx"
          name="avatar"
          filename={`${profile.firstName}-${profile.lastName}-acknowledgement-document-${randomNumbers}`}
          storageRef={firebase.storage().ref("acknowledgement-document")}
          onUploadStart={this.acknowledgementDocumentHandleUploadStart}
          onUploadError={this.acknowledgementDocumentHandleUploadError}
          onUploadSuccess={this.acknowledgementDocumentHandleUploadSuccess}
          onProgress={this.acknowledgementDocumentHandleProgress}
        />
        <br />
        {this.state.acknowledgementDocumentIsUploading && (
          <p>Your file is uploading please wait</p>
        )}
        <br />
        {this.state.acknowledgementDocumentURL && (
          <a href={this.state.acknowledgementDocumentURL} target="_blank">
            Click to view your uploaded file
          </a>
        )}
        <br />
        <br />
        <div>
          <label>
            <input
              onChange={this.setCheckbox.bind(this)}
              type="checkbox"
              className="filled-in"
              checked={this.state.yesToDeclaration}
            />
            <span>
              I take full responsibility that my qualification and my
              transcripts is an exact copy of the original qualification
              certificate and the above details are true and I accept all the
              legal consequence in the event of proven conflict in what's given
            </span>
          </label>
        </div>
        <br />
        <br />
        <Link
          to="/"
          onClick={(e) => handleSubmit(e)}
          className={`btn ${
            this.state.yesToDeclaration !== false ? "" : "disabled"
          }`}
        >
          Go to Dashboard
        </Link>
      </div>
    );
  }
}

// export default FilesUploader;

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitApplicantUploadedData: (formDetails) =>
      dispatch(submitApplicantUploadedData(formDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilesUploader);
