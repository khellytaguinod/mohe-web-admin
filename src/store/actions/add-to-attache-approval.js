import { dateAndTime } from "../../utils";

export const addToVerificationList = (applicantDetails) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("attacheVerificationList")
      .add({
        ...applicantDetails,
        createdAt: dateAndTime(),
      })
      .then(() => {
        dispatch({ type: "ADDED_APPLICANT_TO_ATTACHE_LIST_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "ADDED_APPLICANT_TO_ATTACHE_LIST_ERROR" }, err);
      });
  };
};
