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
import Comment from "../components/Comment";
import CommentList from "../components/CommentList";
import { comments } from "../comments";
import NewComment from "../components/NewComment";


class App extends Component {
  constructor() {
    super();
    this.state = {
      candidates: candidates,
      searchfield: "",
      comments: comments,
      test: [],
    };
  }


  handleComments() {
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    fetch('http://localhost:3000/test', { 
        method: 'GET',
        data: {
          emptId: self.test
        }
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
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
        <div>{this.handleComments()}</div>
      </>
    );
  }
}

export default App;
