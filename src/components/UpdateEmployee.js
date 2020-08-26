import React, { Component } from "react";

class UpdateEmployee extends Component {
  updateEmployee = () => {
    alert("You clicked update!");
  };
  render() {
    return (
      <div className="updateButton">
        <button
          type="button"
          className="btn btn-sm btn-info btn-rounded waves-effect grow bw2 shadow-5"
          onClick={() => this.updateEmployee()}
        >
          <i className="fa fa-edit"></i>
        </button>
        {this.props.children}
      </div>
    );
  }
}

export default UpdateEmployee;
