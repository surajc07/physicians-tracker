import React, { Component } from "react";

class Scroll extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          overflowY: "scroll",
          border: "5px solid black",
          height: "800px",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
