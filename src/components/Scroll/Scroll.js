import React, { Component } from "react";

class Scroll extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          overflowY: "scroll",
          border: "2px solid black",
          height: "800px",
        }}
        className="shadow-5"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
