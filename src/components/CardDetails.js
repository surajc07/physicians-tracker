import React from "react";

class CardDetails extends React.Component {
  render() {
    var selectedCardId = localStorage.getItem("selectedCard");
    //console.log("selectedCardId 2: ", JSON.parse(selectedCardId));
    var cardObj = JSON.parse(selectedCardId);
    return (
      <div>
        <h1 className="f1 tc">{cardObj.name}'s Additional Information</h1>
        <div style={{ color: "white" }}>
          <p>Degree: {cardObj.degree}</p>
          <p>Hire Date: {cardObj.hireDate}</p>
          <p>Schedule Hours: {cardObj.scheduleHours}</p>
          <p>Business Phone: {cardObj.businessPhone}</p>
          <p>Cell Phone: {cardObj.cellPhone}</p>
        </div>
      </div>
    );
  }
}

export default CardDetails;
