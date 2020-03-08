const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from khelly taguinod hatdog!");
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("Notification added", doc));
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc, context) => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      // time: admin.firestore.FieldValue.serverTimestamp()
      time: new Date()
    };

    return createNotification(notification);
  });

exports.userJoined = functions.firestore
  .document("users/{uid}")
  .onCreate(doc => {
    const user = doc.data();
    const notification = {
      content: "was created in the system",
      user: `${user.firstName} ${user.lastName}`,
      time: new Date()
      // time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });
