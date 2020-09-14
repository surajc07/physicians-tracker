import React, { Component } from "react";
import "./App.css";
import Home from "../components/Home/Home";
import Employee from "../components/Employee/Employee";
import Candidate from "../components/Candidate/Candidate";
// import Layout from "../components/Navigation/Layout";
import DetailInfo from "../components/DetailInfo/DetailInfo";
// import Signin from "../components/Signin/Signin";
// import Register from "../components/Register/Register";
import NavBar from "../components/Navigation/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    // if (route === "signout") {
    //   this.setState({ isSignedIn: false });
    // } else if (
    //   route === "home" ||
    //   route === "employee" ||
    //   route === "candidate" ||
    //   route === "detailinfo"
    // ) {
    //   this.setState({ isSignedIn: true });
    // }
    this.setState({ route });
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/employee" component={Employee} />
            <Route path="/detailinfo" component={DetailInfo} />
            <Route path="/candidate" component={Candidate} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
