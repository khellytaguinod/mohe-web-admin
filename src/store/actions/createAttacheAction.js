export const addAttache = (newUserAttache) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("attacheList")
      // .doc(resp.user.uid)
      .add({
        firstName: newUserAttache.firstName,
        lastName: newUserAttache.lastName,
        initials: newUserAttache.firstName[0] + newUserAttache.lastName[0],
        userType: newUserAttache.userType,
        attacheEmail: newUserAttache.email,
        country: newUserAttache.country,
        attachePass: newUserAttache.password,
      })
      .then(() => {
        dispatch({ type: "SIGNUP_ATTACHE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ATTACHE_ERROR", err });
      });
  };
};