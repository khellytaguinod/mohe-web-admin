import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/sign-in";
import SignUp from "./components/auth/sign-up";
import CreateProject from "./components/projects/CreateProject";
import ApplicantForm from "./components/applicant-form/applicant-form";
import UploadFiles from './components/upload-files/upload-documents'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
            <Route path="/create-application" component={ApplicantForm} />
            <Route path="/upload-documents" component={UploadFiles} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
