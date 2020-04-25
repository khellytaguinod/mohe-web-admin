import { dateAndTime } from "../../utils";

export const submitApplicantUploadedData = (submittedDetails) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const authorEmail = getState().firebase.auth.email;

    let docID;

    firestore
      .collection("users")
      .where("userEmail", "==", `${profile.userEmail}`)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id);
          docID = doc.id;
        });
      })
      .then(() => {
        firestore.collection("listOfApplications").add({
          ...submittedDetails,
          userFirstName: profile.firstName,
          userLastName: profile.lastName,
          userEmail: authorEmail,
          userId: authorId,
          isVerified: null,
          createdAt: dateAndTime(),
        });
      })
      .then(() => {
        if (docID) {
          firestore.collection("users").doc(`${docID}`).update({
            applicationStatus: "Submitted",
          });
        }
      })
      .then(() => {
        dispatch({ type: "UPLOAD_DOCUMENT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "UPLOAD_DOCUMENT_ERROR" }, err);
      });
  };
};
