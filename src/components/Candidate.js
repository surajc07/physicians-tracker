import React, { Component } from "react";
import FadeIn from "react-fade-in";

class Candidate extends Component {
  state = {};
  render() {
    return (
      <FadeIn>
        <div className="tc">
          <h1 className="display-2">Candidates</h1>
        </div>
      </FadeIn>
    );
  }
}

export default Candidate;
