import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CardInfo.css";

class CardInfo extends Component {
  handleCardDetails = (employeeDetail) => {
    //console.log("employeeDetail: ", employeeDetail);
    localStorage.setItem("selectedCard", JSON.stringify(employeeDetail));
    this.props.history.push(`/detailinfo/`);
  };

  render() {
    const {
      empId,
      empName,
      empDegree,
      empStatus,
      empHireDtm,
      empJobTitle,
      empJobTitleCode,
      empSchedulePct,
      empScheduleType,
      empScheduleHrs,
      empBusUnit,
      empDeptDesc,
      empEmail,
      empTaskId,
      empTaskName,
      empTaskStatus,
    } = this.props;
    const employeeInfo = {
      empId: empId,
      empName: empName,
      empDegree: empDegree,
      empStatus: empStatus,
      empHireDtm: empHireDtm,
      empJobTitle: empJobTitle,
      empJobTitleCode: empJobTitleCode,
      empSchedulePct: empSchedulePct,
      empScheduleType: empScheduleType,
      empScheduleHrs: empScheduleHrs,
      empBusUnit: empBusUnit,
      empDeptDesc: empDeptDesc,
      empEmail: empEmail,
      empTaskId: empTaskId,
      empTaskName: empTaskName,
      empTaskStatus: empTaskStatus,
    };

    // Show cards for higher priority cards
    if (employeeInfo.empTaskId && employeeInfo.empTaskStatus !== "Complete") {
      const isStatusIncomplete = employeeInfo.empTaskStatus === "Incomplete";
      return (
        <div
          className={
            "cardContainer dib br3 pa1 ma2 grow bw2 grow shadow-5 " +
            (isStatusIncomplete ? "bg-light-red" : "bg-light-yellow")
          }
          style={{
            cursor: "pointer",
            height: "200px",
            width: "440px",
          }}
        >
          <div
            className="dib br3 pa3 ma2 bw2"
            style={{
              cursor: "pointer",
              height: "175px",
              width: "415px",
              position: "relative",
            }}
            onClick={() => {
              this.handleCardDetails(employeeInfo);
              this.props.onRouteChange("detailinfo");
            }}
          >
            <div className="tc row">
              <div>
                <img
                  alt="robots"
                  src={`https://robohash.org/${employeeInfo.empId}?80x80`}
                  className="shadow-5"
                />
              </div>
              <div className="pa3">
                <table
                  style={{ color: isStatusIncomplete ? "white" : "black" }}
                >
                  <tbody>
                    <tr>
                      <td className="tl">{employeeInfo.empName}</td>
                      <td className="tr">{employeeInfo.empDeptDesc}</td>
                    </tr>
                    <tr>
                      <td className="tl">{employeeInfo.empJobTitle}</td>
                      <td className="tr">{employeeInfo.empEmail} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <strong>
              <table>
                <tbody>
                  <tr>
                    <td className="tl">Task Name:&nbsp; </td>
                    <td className="tl">{employeeInfo.empTaskName}</td>
                  </tr>
                  <tr>
                    <td className="tl">Status:&nbsp;</td>
                    <td className="tl">{employeeInfo.empTaskStatus}</td>
                  </tr>
                </tbody>
              </table>
            </strong>
          </div>

          <div className="deleteButton">
            <button
              type="button"
              className="btn btn-sm btn-danger btn-rounded waves-effect grow bw2 shadow-5"
              onClick={() => this.props.onDelete(employeeInfo.empId)}
            >
              <i className="fa fa-user-times"></i>
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(CardInfo);
