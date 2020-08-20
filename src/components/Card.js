import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Card extends Component {
  goToCardDetails = (employeeDetail) => {
    //console.log("employeeDetail: ", employeeDetail);
    localStorage.setItem("selectedCard", JSON.stringify(employeeDetail));
    this.props.history.push("/detailinfo");
  };
  render() {
    const employeeBasic = {
      name: this.props.name,
      jobTitle: this.props.jobTitle,
      department: this.props.department,
      email: this.props.email,
      tasksDue: this.props.tasksDue,
    };
    const employeeDetail = {
      name: this.props.name,
      degree: this.props.degree,
      hireDate: this.props.hireDate,
      scheduleHours: this.props.scheduleHours,
      businessPhone: this.props.businessPhone,
      cellPhone: this.props.cellPhone,
    };

    // Show cards for higher priority cards
    if (employeeBasic.tasksDue > 0) {
      return (
        <div
          className="tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5"
          onClick={() => this.goToCardDetails(employeeDetail)}
        >
          <div>
            <h2>{employeeBasic.name}</h2>
            <p>{employeeBasic.jobTitle}</p>
            <p>{employeeBasic.department}</p>
            <p>{employeeBasic.email}</p>
            <p>
              <b>Tasks Due: {employeeBasic.tasksDue}</b>
            </p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Card);
