const initState = {
  successMsg: null,
  failedMsg: null,
};

const attacheReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_ATTACHE_SUCCESS":
      console.log("login error");
      return {
        ...state,
        successMsg: "Attache Account Successfully Created",
      };

    case "SIGNUP_ATTACHE_ERROR":
      console.log("login success");
      return {
        ...state,
        failedMsg: "Creating Attache Account Failed",
      };

    case "CLEAR_ATTACHE_MESSAGE":
      console.log("clear msg");
      return {
        ...state,
        successMsg: null,
        failedMsg: null,
      };

    default:
      return state;
  }
};

export default attacheReducer;
