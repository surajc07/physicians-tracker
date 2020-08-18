import React, { Component } from "react";
import "./App.css";
import Employee from "../components/Employee";
import Candidate from "../components/Candidate";
import NoMatch from "../components/NoMatch";
import Layout from "../components/Layout";
import { NavigationBar } from "../components/NavigationBar";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Employee} />
              <Route exact path="/candidate" component={Candidate} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </>
    );
  }
}

export default App;
