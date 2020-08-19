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
import CommentList from "../components/CommentList";
import { comments } from "../comments";


class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: comments,
    };
  }



  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

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

        <CommentList comments={ comments} />
        
      </>
    );
  }
}

export default App;
