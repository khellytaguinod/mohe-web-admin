// import { dateAndTime } from "../../utils";

export const createApplicationForm = (formDetails) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("applicationForms")
      .add({
        ...formDetails,
        isVerified: null,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        applicantEmail: profile.userEmail,
        authorId: authorId,
        // createdAt: dateAndTime(),
      })
      .then(() => {
        dispatch({ type: "CREATE_APPLICATION_FORM_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_APPLICATION_FORM_ERROR" }, err);
      });
  };
};
