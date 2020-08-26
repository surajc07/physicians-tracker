import React, { Component } from "react";

class DeleteEmployee extends Component {
  deleteEmployee = () => {
    alert("You clicked delete!");
  };
  render() {
    return (
      <div className="deleteButton">
        <button
          type="button"
          className="btn btn-sm btn-info btn-rounded waves-effect grow bw2 shadow-5"
          onClick={() => this.deleteEmployee()}
        >
          <i className="fa fa-user-times"></i>
        </button>
      </div>
    );
  }
}

export default DeleteEmployee;
