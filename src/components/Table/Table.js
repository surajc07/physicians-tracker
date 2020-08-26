import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Table.css";

class Table extends Component {
  handleRowDetails = (otherEmployees) => {
    //console.log("employeeDetail: ", otherEmployees);
    localStorage.setItem("selectedCard", JSON.stringify(otherEmployees));
    this.props.history.push(`/detailinfo/${otherEmployees.id}`);
  };
  render() {
    const { employees } = this.props;
    const otherEmployees = employees.filter((employee) =>
      employee.tasksDue.includes("0")
    );
    if (Object.keys(otherEmployees).length) {
      return (
        <div>
          <table className="table table-dark table-bordered table-striped shadow-5 table-sm table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Job Title</th>
                <th scope="col">Department</th>
                <th scope="col">Email</th>
                <th scope="col">Tasks Due</th>
              </tr>
            </thead>

            {otherEmployees.map((user, i) => {
              return (
                <tbody key={i}>
                  <tr
                    onClick={() => {
                      this.handleRowDetails(otherEmployees[i]);
                      this.props.onRouteChange("detailinfo");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{otherEmployees[i].name}</td>
                    <td>{otherEmployees[i].jobTitle}</td>
                    <td>{otherEmployees[i].department}</td>
                    <td>{otherEmployees[i].email}</td>
                    <td>{otherEmployees[i].tasksDue}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Table);
