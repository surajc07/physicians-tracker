import React, { Component } from "react";
import "./App.css";
import Home from "../components/Home/Home";
import Employee from "../components/Employee/Employee";
import Candidate from "../components/Candidate/Candidate";
// import Layout from "../components/Navigation/Layout";
import DetailInfo from "../components/DetailInfo/DetailInfo";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import Navigation from "../components/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
require("dotenv").config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
      isSignedIn: true,
    };
  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (
      route === "home" ||
      route === "employee" ||
      route === "candidate" ||
      route === "detailinfo"
    ) {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route });
  };

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="appContainer">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {/* <Layout> */}
        <Router>
          {route === "home" ? (
            <Home />
          ) : route === "employee" ? (
            <Employee onRouteChange={this.onRouteChange} />
          ) : route === "detailinfo" ? (
            <DetailInfo />
          ) : route === "candidate" ? (
            <Candidate />
          ) : route === "signin" || route === "signout" ? (
            <Signin onRouteChange={this.onRouteChange} />
          ) : (
            <Register onRouteChange={this.onRouteChange} />
          )}
        </Router>
        {/* </Layout> */}
      </div>
    );
  }
}

export default App;
