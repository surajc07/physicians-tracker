import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Card.css";
import UpdateEmployee from "./UpdateEmployee";
import DeleteEmployee from "./DeleteEmployee";

class Card extends Component {
  goToCardDetails = (employeeDetail) => {
    //console.log("employeeDetail: ", employeeDetail);
    localStorage.setItem("selectedCard", JSON.stringify(employeeDetail));
    this.props.history.push("/detailinfo");
  };

  render() {
    const employeeInfo = {
      id: this.props.id,
      name: this.props.name,
      jobTitle: this.props.jobTitle,
      department: this.props.department,
      email: this.props.email,
      tasksDue: this.props.tasksDue,
      degree: this.props.degree,
      hireDate: this.props.hireDate,
      scheduleHours: this.props.scheduleHours,
      businessPhone: this.props.businessPhone,
      cellPhone: this.props.cellPhone,
    };

    // Show cards for higher priority cards
    if (employeeInfo.tasksDue > 0) {
      return (
        <div
          className="cardContainer bg-light-red dib br3 pa1 ma2 grow bw2 shadow-5"
          style={{
            cursor: "pointer",
            height: "180px",
            width: "430px",
          }}
        >
          <div
            className="bg-light-red dib br3 pa3 ma2 grow bw2 "
            style={{
              cursor: "pointer",
              height: "155px",
              width: "405px",
              position: "relative",
            }}
            onClick={() => this.goToCardDetails(employeeInfo)}
          >
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="profile-image float-md-right">
                  <img
                    alt="robots"
                    src={`https://robohash.org/${employeeInfo.id}?80x80`}
                    className="shadow-5"
                  />
                </div>
              </div>
              <div className="tl">
                <h4 className="m-t-0 m-b-0">
                  <strong>{employeeInfo.name}</strong>
                </h4>
                <p>
                  {employeeInfo.jobTitle} <br></br>
                  {employeeInfo.department} <br></br>
                  {employeeInfo.email} <br></br>
                  <strong>Tasks Due: {employeeInfo.tasksDue}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="deleteEmployee">
            <DeleteEmployee />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Card);
