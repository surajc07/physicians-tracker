import React, { Component } from "react";
import FadeIn from "react-fade-in";

class DetailInfo extends Component {
  render() {
    var selectedCardId = localStorage.getItem("selectedCard");
    //console.log("selectedCardId 2: ", JSON.parse(selectedCardId));
    var selectedCardObj = JSON.parse(selectedCardId);
    return (
      <FadeIn>
        <div className="list-group shadow-5">
          <h1 className="tc">
            {!!selectedCardObj.empName
              ? selectedCardObj.empName
              : selectedCardObj.empFirstNm + " " + selectedCardObj.empLastNm}
            's Additional Information
          </h1>
          <div style={{ color: "black" }}>
            <li className="list-group-item list-group-item-action list-group-item-info">
              Degree: {selectedCardObj.empDegree}
            </li>
            <li className="list-group-item list-group-item-action list-group-item-info">
              Hire Date: {selectedCardObj.empHireDtm}
            </li>
            <li className="list-group-item list-group-item-action list-group-item-info">
              Schedule Hours: {selectedCardObj.empScheduleHrs}
            </li>
            <li className="list-group-item list-group-item-action list-group-item-info">
              Business Phone: {selectedCardObj.businessPhone}
            </li>
            <li className="list-group-item list-group-item-action list-group-item-info">
              Cell Phone: {selectedCardObj.cellPhone}
            </li>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default DetailInfo;
