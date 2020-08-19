import React, { Component } from "react";
import "./App.css";
import { candidates } from "../candidates";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import NewCandidate from "../components/NewCandidate";
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
    const { candidates, searchfield, comments , test} = this.state;
    const filteredCandidates = candidates.filter((candidate) => {
      return candidate.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    //console.log(filteredCandidates);
    return !candidates.length ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Candidates</h1>
        <div className="tr">
          <NewCandidate />
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <CardList candidates={filteredCandidates} />
        </Scroll>
        <CommentList comments={ comments} />
        <div>{this.handleComments()}</div>
        
      </div>
    );
  }
}

export default App;
