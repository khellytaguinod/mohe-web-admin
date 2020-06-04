import { dateAndTime } from "../../utils";

export const moheFinalRejection = (applicantDetails) => {
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
        firestore.collection("moheFinalRejectList").add({
          ...applicantDetails,
          createdAt: dateAndTime(),
        });
      })
      .then(() => {
        console.log("mohe-final-reject");
        if (docID) {
          firestore.collection("applicationForms").doc(`${docID}`).update({
            isVerified: "mohe-final-reject",
          });
        }
      })

      .then(() => {
        dispatch({ type: "MOHE_REJECTED_APPLICATION_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "MOHE_REJECTED_APPLICATION_ERROR" }, err);
      });
  };
};
