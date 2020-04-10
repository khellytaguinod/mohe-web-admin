import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class FilesUploader extends Component {
  // passportCopy
  // userPhoto
  // academicReport
  // travel details in and out of country
  // acknowledgement document

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
      .then((url) => this.setState({ passportPhotoURL: url }));
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
      .then((url) => this.setState({ userPhotoURL: url }));
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
      .then((url) => this.setState({ academicReportURL: url }));
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
      .then((url) => this.setState({ travelDetailsURL: url }));
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
      .then((url) => this.setState({ acknowledgementDocumentURL: url }));
  };

  render() {
    const { profile } = this.props;
    console.log(profile);
    return (
      <div>
        <label>Passport Copy:</label>

        <FileUploader
          accept="image/jpeg,image/png,application/pdf,.doc, .docx"
          name="avatar"
          filename={`${profile.firstName}-${profile.lastName}-passport-copy`}
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
            View your document
          </a>
        )}
        <br />
        <br />
        <label>Personal Photo:</label>

        <FileUploader
          accept="image/jpeg,image/png,application/pdf,.doc, .docx"
          name="avatar"
          filename={`${profile.firstName}-${profile.lastName}-user-personal-photo`}
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
            View your document
          </a>
        )}
        <br />
        <br />
        <label>Academic Report:</label>
        <FileUploader
          accept="image/jpeg,image/png,application/pdf,.doc, .docx"
          name="avatar"
          filename={`${profile.firstName}-${profile.lastName}-academic-report`}
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
            View your document
          </a>
        )}
        <br />
        <br />
        <label>Travel Details</label>
        <FileUploader
          accept="image/jpeg,image/png,application/pdf,.doc, .docx"
          name="avatar"
          filename={`${profile.firstName}-${profile.lastName}-trave-details`}
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
            View your document
          </a>
        )}

        <br />
        <br />
        <label>acknowledgement Document</label>
        <FileUploader
          accept="image/jpeg,image/png,application/pdf,.doc, .docx"
          name="avatar"
          filename={`${profile.firstName}-${profile.lastName}-acknowledgement-document`}
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
            View your document
          </a>
        )}
      </div>
    );
  }
}

export default FilesUploader;
