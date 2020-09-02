import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Table.css";

class Table extends Component {
  handleRowDetails = (employeeDetail) => {
    //console.log("employeeDetail: ", employeeDetail);
    localStorage.setItem("selectedCard", JSON.stringify(employeeDetail));
    this.props.history.push(`/`);
  };
  render() {
    var { employees } = this.props;
    // Let's filter the array to only show employees with no tasks/completed tasks on table
    employees = employees.filter(
      (employee) =>
        !employee.empTaskId || employee.empTaskStatus.includes("Complete")
    );
    if (Object.keys(employees).length) {
      return (
        <div>
          <table className="table table-dark table-bordered table-striped shadow-5 table-sm table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Job Title</th>
                <th scope="col">Department</th>
                <th scope="col">Email</th>
                <th scope="col">Task Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>

            {employees.map((user, i) => {
              return (
                <tbody key={i}>
                  <tr
                    onClick={() => {
                      this.handleRowDetails(employees[i]);
                      this.props.onRouteChange("detailinfo");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <td>
                      {employees[i].empFirstNm + " " + employees[i].empLastNm}
                    </td>
                    <td>{employees[i].empJobTitle}</td>
                    <td>{employees[i].empDeptDesc}</td>
                    <td>{employees[i].empEmail}</td>
                    <td>{employees[i].empTaskName}</td>
                    <td>{employees[i].empTaskStatus}</td>
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
