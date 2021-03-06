import React, { Component } from "react";
import FadeIn from "react-fade-in";

class DetailInfo extends Component {
  render() {
    var selectedCardId = localStorage.getItem("selectedCard");
    //console.log("selectedCardId 2: ", JSON.parse(selectedCardId));
    var cardObj = JSON.parse(selectedCardId);
    return (
      <FadeIn>
        <div className="list-group shadow-5">
          <h1 className="tc">{cardObj.name}'s Additional Information</h1>
          <div style={{ color: "black" }}>
            <li className="list-group-item list-group-item-action list-group-item-info">
              Degree: {cardObj.degree}
            </li>
            <li className="list-group-item list-group-item-action list-group-item-info">
              Hire Date: {cardObj.hireDate}
            </li>
            <li className="list-group-item list-group-item-action list-group-item-info">
              Schedule Hours: {cardObj.scheduleHours}
            </li>
            <li className="list-group-item list-group-item-action list-group-item-info">
              Business Phone: {cardObj.businessPhone}
            </li>
            <li className="list-group-item list-group-item-action list-group-item-info">
              Cell Phone: {cardObj.cellPhone}
            </li>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default DetailInfo;
