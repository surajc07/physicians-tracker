import React, { Component } from "react";
import "./App.css";
import Home from "../components/Home";
import Employee from "../components/Employee";
import Candidate from "../components/Candidate";
import NoMatch from "../components/NoMatch";
import Layout from "../components/Layout";
import CardDetails from "../components/CardDetails";
import { NavigationBar } from "../components/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              {/* Add new page here */}
              <Route exact path="/home" component={Home} />
              <Route exact path="/employee" component={Employee} />
              <Route exact path="/candidate" component={Candidate} />
              <Route exact path="/detailinfo" component={CardDetails} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </>
    );
  }
}

export default App;
