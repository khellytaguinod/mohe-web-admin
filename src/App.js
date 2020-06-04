import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import MOHEDashboard from "./components/admin-mohe/mohe-dashboard";
import AttacheDashboard from "./components/attache-dashboard/attache-dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/sign-in";
import SignUp from "./components/auth/sign-up";
import CreateProject from "./components/projects/CreateProject";
import ApplicantForm from "./components/applicant-form/applicant-form";
import UploadFiles from "./components/upload-files/upload-documents";
import ApplicantInfo from "./components/applicant-info/applicant-info";
import SuccessPage from "./pages/success-page";
import MoheForwardSuccessPage from "./components/admin-mohe/success-page/success-page";
import ApprovalSuccessPage from "./pages/approval-success-page";
import AttacheRejectPage from "./pages/attache-rejected-page";
import MOHERejectedPage from "./pages/mohe-rejected-page";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/mohe-dashboard" component={MOHEDashboard} />
            <Route
              exact
              path="/attache-dashboard"
              component={AttacheDashboard}
            />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/applicant/:id" component={ApplicantInfo} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
            <Route path="/create-application" component={ApplicantForm} />
            <Route path="/upload-documents" component={UploadFiles} />
            <Route path="/application-submit-success" component={SuccessPage} />
            <Route
              path="/application-attache-reject"
              component={AttacheRejectPage}
            />
            <Route
              path="/application-mohe-reject"
              component={MOHERejectedPage}
            />
            <Route
              path="/application-approved-success"
              component={ApprovalSuccessPage}
            />
            <Route
              path="/mohe-application-forwarded-success"
              component={MoheForwardSuccessPage}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
