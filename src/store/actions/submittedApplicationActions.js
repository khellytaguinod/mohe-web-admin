import { dateAndTime } from "../../utils";

export const submitApplicantUploadedData = (submittedDetails) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const authorEmail = getState().firebase.auth.email;
    
    firestore
      .collection("listOfApplications")
      .add({
        ...submittedDetails,
        userFirstName: profile.firstName,
        userLastName: profile.lastName,
        userEmail: authorEmail,
        userId: authorId,
        isVerified: null,
        createdAt: dateAndTime(),
      })
      .then(() => {
        dispatch({ type: "CREATE_APPLICANT_DATA_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_APPLICANT_DATA_ERROR" }, err);
      });
  };
};
