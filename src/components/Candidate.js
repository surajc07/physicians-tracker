import React, { Component } from "react";
import FadeIn from "react-fade-in";

class Candidate extends Component {
  state = {};
  render() {
    return (
      <FadeIn>
        <div className="tc">
          <div
            className="
            d-flex
            justify-content-between
            flex-wrap
            flex-md-nowrap
            align-items-center
            pt-3
            pb-2
            mb-3
            border-bottom"
          >
            <h1 className="display-2">Candidates</h1>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default Candidate;
