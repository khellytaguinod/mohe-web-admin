import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import attacheReducer from "./attacheReducer";
import uploadDocumentReducer from "./upload-documentReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  attache: attacheReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  uploadDocument: uploadDocumentReducer,
});

export default rootReducer;
