import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import FilesUploader from "./files-uploader";

class UploadFiles extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="container white">
        <div style={{ padding: "15px 60px" }}>
          <h5
            className="grey-text text-darken-3"
            style={{ textAlign: "center" }}
          >
            Upload Files Attachments
          </h5>

          <div>
            <fieldset>
              <legend>Important Reminders</legend>
              <p>Only accepted documents are .jpg .jpeg .png .doc .docx .pdf</p>
              <p>File name must be english.</p>
              <p>Maximum file size is 5mb only.</p>
            </fieldset>
          </div>

          <br />
          <FilesUploader profile={profile} />
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadFiles);
