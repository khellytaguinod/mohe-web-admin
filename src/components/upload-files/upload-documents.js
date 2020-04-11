import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

import FilesUploader from "./files-uploader";

class UploadFiles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { profile } = this.props;
    return (
      <div className="container white">
        <h5 className="grey-text text-darken-3" style={{ textAlign: "center" }}>
          Upload Files Attachments
        </h5>

        <div>
          <fieldset>
            <legend>Important Reminders</legend>
            <p>Only accepted documents doc docx</p>
            <p>The file name must not consist of any symbols such as (! @ )</p>
          </fieldset>
        </div>

        <br />
        <FilesUploader profile={profile} />
        <br />
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
