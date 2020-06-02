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

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("Notification added", doc));
};

const createAttacheAuth = (attacheDetails) => {
  return admin
    .auth()
    .createUser({
      email: attacheDetails.email,
      password: attacheDetails.password,
      displayName: attacheDetails.user,
    })
    .then((userRecord) => {
      return admin
        .firestore()
        .collection("users")
        .doc(userRecord.uid)
        .set({
          firstName: attacheDetails.firstName,
          lastName: attacheDetails.lastName,
          initials: attacheDetails.firstName[0] + attacheDetails.lastName[0],
          userType: "attache",
          userEmail: attacheDetails.email,
          country: attacheDetails.country,
        });
    })
    .catch(function (error) {
      console.log("Error creating new user:", error);
    });
};

exports.createAttache = functions.firestore
  .document("attacheList/{attacheId}")
  .onCreate((doc) => {
    const attache = doc.data();
    const attacheInfo = {
      firstName: attache.firstName,
      lastName: attache.lastName,
      email: attache.attacheEmail,
      password: attache.attachePass,
      user: `${attache.firstName} ${attache.lastName}`,
      country: attache.country,
    };
    return createAttacheAuth(attacheInfo);
  });

// Sends a welcome email to attache.
const attacheWelcomeMail = (email, displayName, pass, country) => {
  const APP_NAME = "MOHE-ECAES Web System";

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  };

  mailOptions.subject = `Welcome to ${APP_NAME}!`;
  mailOptions.text = `Welcome Attache ${displayName}! 
  
Welcome to ${APP_NAME}. 
Your account was created by a MOHE admin.

You can use your email and login with ''' ${pass} ''' as your password to the system.
You will be managing applicants in your country ${country}.

Please go and login to https://mohe-web-admin.web.app/sign-in.

  
This is an automated email. Please do not reply.
  `;
  mailTransport.sendMail(mailOptions);
  console.log("New welcome email sent to:", email);
  return null;
};

exports.attacheCreatedEmailNotification = functions.firestore
  .document("attacheList/{attacheId}")
  .onCreate((doc) => {
    const attache = doc.data();

    const email = attache.attacheEmail;
    const name = `${attache.firstName} ${attache.lastName}`;
    const pass = attache.attachePass;
    const country = attache.country;
    return attacheWelcomeMail(email, name, pass, country);
  });

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc, context) => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: dateAndTimeNow,
    };

    return createNotification(notification);
  });

exports.applicationCreatedLogger = functions.firestore
  .document("applicationForms/{applicantFormId}")
  .onCreate((doc) => {
    const user = doc.data();

    const notification = {
      content: "submitted an applicant form",
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
      content: "was registered in the system",
      user: `${user.firstName} ${user.lastName}`,
      time: dateAndTimeNow,
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
Thank you for registering your account. MOHE - ECAES web system.
  
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

// Send a notification to the applicant that the application was forwarded to attache
const sendEmailApplicantNotification = (email, displayName, country) => {
  const APP_NAME = "MOHE-ECAES Web System";

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  };

  mailOptions.subject = `Update about the application you submitted Applicant ${displayName}`;
  mailOptions.text = `Good Day Applicant 
${displayName}
  
You are receiving this email to informed you that the application you submitted was viewed and now being forwarded to the ${country} Attaché. This is to verify that the details you submitted and real and legal. Please wait for further instructions.
  
MOHE-ECAES Web System.
This is an automated email. Please do not reply.
  `;

  mailTransport.sendMail(mailOptions);
  console.log("A notification email was sent to:", email);
  return null;
};

exports.applicantUploadedFiles = functions.firestore
  .document("attacheVerificationList/{attacheVerificationListId}")
  .onCreate((doc) => {
    const applicant = doc.data();

    const email = applicant.applicantEmail;
    const name = applicant.applicantName;
    const country = applicant.applicantCountry;
    return sendEmailApplicantNotification(email, name, country);
  });

// Send a notification to the applicant that the application was forwarded to attache
const moheApprovalEmailNotification = (email, displayName) => {
  const APP_NAME = "MOHE-ECAES Web System";

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  };

  mailOptions.subject = `Update about the application you submitted Applicant ${displayName}`;
  mailOptions.text = `Good Day Applicant
${displayName}

Congratulations you're receiving this email because your application passed and the was successfully approved by the MOHE of Oman. Please wait for further instructions.

MOHE-ECAES Web System.
This is an automated email. Please do not reply.
  `;

  mailTransport.sendMail(mailOptions);
  console.log("A notification email was sent to:", email);
  return null;
};

exports.applicantUploadedFiles = functions.firestore
  .document("moheFinalApprovedList/{applicantApprovedId}")
  .onCreate((doc) => {
    const applicant = doc.data();

    const email = applicant.applicantEmail;
    const name = applicant.applicantName;
    return moheApprovalEmailNotification(email, name);
  });
