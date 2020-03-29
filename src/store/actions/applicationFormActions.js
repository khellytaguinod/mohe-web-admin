export const createApplicationForm = formDetails => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("application-forms")
      .add({
        ...formDetails,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date().toString()
      })
      .then(() => {
        dispatch({ type: "CREATE_APPLICATION_FORM_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_APPLICATION_FORM_ERROR" }, err);
      });
  };
};
