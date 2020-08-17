import React, { Component } from "react";
import "./App.css";
import { candidates } from "../candidates";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import NewCandidate from "../components/NewCandidate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      candidates: candidates,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { candidates, searchfield } = this.state;
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
      </div>
    );
  }
}

export default App;
