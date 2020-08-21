import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Card extends Component {
  goToCardDetails = (employeeDetail) => {
    //console.log("employeeDetail: ", employeeDetail);
    localStorage.setItem("selectedCard", JSON.stringify(employeeDetail));
    this.props.history.push("/carddetails");
  };
  render() {
    const { name, jobTitle, department, email, tasksDue } = this.props;
    const employeeDetail = {
      id: this.props.id,
      name: name,
      degree: this.props.degree,
      hireDate: this.props.hireDate,
      scheduleHours: this.props.scheduleHours,
      businessPhone: this.props.businessPhone,
      cellPhone: this.props.cellPhone,
    };

    // Show cards for higher priority cards
    return tasksDue > 0 ? (
      <div
        className="tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5"
        onClick={() => this.goToCardDetails(employeeDetail)}
      >
        <div>
          <h2>{name}</h2>
          <p>{jobTitle}</p>
          <p>{department}</p>
          <p>{email}</p>
          <p>
            <b>Tasks Due: {tasksDue}</b>
          </p>
        </div>
      </div>
    ) : (
      //I will make a React table here based on the data coming in later
      <div
        className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"
        onClick={() => this.goToCardDetails(employeeDetail)}
      >
        <div>
          <h2>{name}</h2>
          <p>{jobTitle}</p>
          <p>{department}</p>
          <p>{email}</p>
          <p>Tasks Due: {tasksDue}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
