import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB4-8JH7tSzjdVakNJzhrnHf4ROFa2AP7c",
  authDomain: "mohe-web-admin.firebaseapp.com",
  databaseURL: "https://mohe-web-admin.firebaseio.com",
  projectId: "mohe-web-admin",
  storageBucket: "mohe-web-admin.appspot.com",
  messagingSenderId: "660889962333",
  appId: "1:660889962333:web:240793a36cae55cf5f4ab4",
  measurementId: "G-RH9GBLDFS9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
