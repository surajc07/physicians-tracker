import React, { Component } from "react";
import CardInfo from "./CardInfo";

class CardList extends Component {
  render() {
    const { employees, onDelete } = this.props;
    return (
      <div className="row">
        <div className="col-sm-12">
          <CardInfo employees={employees} onDelete={onDelete} />
          );
        </div>
      </div>
    );
  }
}

//prop type for catching errors

export default CardList;
