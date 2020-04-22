"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const nodemailer = require("nodemailer");

let dateFormat = require("dateformat");
let now = new Date();
let dateAndTimeNow = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss");

// gmail user account here
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from khelly taguinod hatdog!");
// });

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("Notification added", doc));
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc, context) => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      // time: admin.firestore.FieldValue.serverTimestamp()
      time: dateAndTimeNow,
    };

    return createNotification(notification);
  });

exports.applicationCreatedLogger = functions.firestore
  .document("application-forms/{applicantFormId}")
  .onCreate((doc) => {
    const user = doc.data();

    const notification = {
      content: "An applicant submitted a user information",
      user: `${user.authorFirstName} ${user.authorLastName}`,
      time: dateAndTimeNow,
    };

    return createNotification(notification);
  });

exports.userJoined = functions.firestore
  .document("users/{uid}")
  .onCreate((doc) => {
    const user = doc.data();
    const notification = {
      content: "was created in the system",
      user: `${user.firstName} ${user.lastName}`,
      time: dateAndTimeNow,

      // time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });

// Sends a welcome email to the given user.
const sendWelcomeEmail = (email, displayName) => {
  const APP_NAME = "MOHE-ECAES Web System";

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  };

  mailOptions.subject = `Welcome to ${APP_NAME}!`;
  mailOptions.text = `Hey ${displayName}! 
  
  Welcome to ${APP_NAME}. 
  Thank you for registering your account. Please continue the required forms so your application can be review and verify.
  
  This is an automated email. Please do not reply.
  `;
  mailTransport.sendMail(mailOptions);
  console.log("New welcome email sent to:", email);
  return null;
};

exports.userCreatedEmail = functions.firestore
  .document("users/{uid}")
  .onCreate((doc) => {
    const user = doc.data();

    const email = user.userEmail;
    const name = `${user.firstName} ${user.lastName}`;
    return sendWelcomeEmail(email, name);
  });

// Sends a success submitted application of the applicant
const sendSuccessSubmittedForm = (email, displayName) => {
  const APP_NAME = "MOHE-ECAES Web System";

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `Application status you submitted to ${APP_NAME}`;
  mailOptions.text = `Good Day Applicant 
  ${displayName}
  
  
  You are receiving this email to informed you that you successfully submitted your application. Your application is now being process and being reviewed by Ministry of Educ Abroad. Please wait for updates and for further instructions.
  
  MOHE-ECAES Web System.
  This is an automated email. Please do not reply.
  `;

  mailTransport.sendMail(mailOptions);
  console.log("New welcome email sent to:", email);
  return null;
};

exports.applicantUploadedFiles = functions.firestore
  .document("listOfApplications/{applicantId}")
  .onCreate((doc) => {
    const applicant = doc.data();

    const email = applicant.userEmail;
    const name = `${applicant.userFirstName} ${applicant.userLastName}`;
    return sendSuccessSubmittedForm(email, name);
  });
