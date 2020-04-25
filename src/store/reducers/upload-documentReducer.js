const initState = {
  successMsg: null,
  failedMsg: null,
};

const uploadDocumentReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPLOAD_DOCUMENT_SUCCESS":
      console.log("upload documents success");
      return {
        ...state,
        successMsg: "Attache Account Successfully Created",
      };

    case "UPLOAD_DOCUMENT_ERROR":
      console.log("upload documents error");
      return {
        ...state,
        failedMsg: "Uploading Document Failed",
      };

    default:
      return state;
  }
};

export default uploadDocumentReducer;
