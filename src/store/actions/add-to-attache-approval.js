import { dateAndTime } from "../../utils";

export const addToVerificationList = (applicantDetails) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    let docID;

    console.log(applicantDetails.applicantEmail, "look here");

    firestore
      .collection("applicationForms")
      .where("applicantEmail", "==", `${applicantDetails.applicantEmail}`)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id);
          docID = doc.id;
        });
      })
      .then(() => {
        firestore.collection("attacheVerificationList").add({
          ...applicantDetails,
          createdAt: dateAndTime(),
        });
      })
      .then(() => {
        console.log('huhu salt')
        if (docID) {
          firestore.collection("applicationForms").doc(`${docID}`).update({
            isVerified: "attache-waiting",
          });
        }
      })

      .then(() => {
        dispatch({ type: "ADDED_APPLICANT_TO_ATTACHE_LIST_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "ADDED_APPLICANT_TO_ATTACHE_LIST_ERROR" }, err);
      });
  };
};
