import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CardInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class CardInfo extends Component {
  handleCardDetails = (employeeDetail) => {
    //console.log("employeeDetail: ", employeeDetail);
    localStorage.setItem("selectedCard", JSON.stringify(employeeDetail));
    this.props.history.push(`/detailinfo`);
  };

  render() {
    const { employees } = this.props;
    if (Object.keys(employees).length) {
      return (
        <div>
          {employees.map((user, i) => {
            // Show cards for higher priority cards
            if (
              employees[i].empTaskId &&
              employees[i].empTaskStatus !== "Complete"
            ) {
              const isStatusIncomplete =
                employees[i].empTaskStatus === "Incomplete";
              return (
                <div
                  key={i}
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
                      this.handleCardDetails(employees[i]);
                      // onRouteChange("detailinfo");
                    }}
                  >
                    <div className="tc row">
                      <div>
                        <img
                          alt="robots"
                          src={`https://robohash.org/${employees[i].empId}`}
                          className="shadow-5"
                        />
                      </div>
                      <div className="pa3">
                        <table
                          style={{
                            color: isStatusIncomplete ? "white" : "black",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td className="tl">
                                {employees[i].empFirstNm +
                                  " " +
                                  employees[i].empLastNm}
                              </td>
                              <td className="tr">{employees[i].empDeptDesc}</td>
                            </tr>
                            <tr>
                              <td className="tl">{employees[i].empJobTitle}</td>
                              <td className="tr">{employees[i].empEmail} </td>
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
                            <td className="tl">{employees[i].empTaskName}</td>
                          </tr>
                          <tr>
                            <td className="tl">Status:&nbsp;</td>
                            <td className="tl">{employees[i].empTaskStatus}</td>
                          </tr>
                        </tbody>
                      </table>
                    </strong>
                  </div>

                  <div className="deleteButton">
                    <button
                      type="button"
                      className="btn btn-sm btn-danger btn-rounded waves-effect grow bw2 shadow-5"
                      onClick={() => this.props.onDelete(employees[i].empId)}
                    >
                      <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    }
  }
}

export default withRouter(CardInfo);
