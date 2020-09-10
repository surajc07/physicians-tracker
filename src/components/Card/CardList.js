import React, { Component } from "react";
import CardInfo from "./CardInfo";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      route: "",
    };
    this.onRouteChange = this.onRouteChange.bind(this);
  }
  onRouteChange(route) {
    this.setState({ route });
  }

  getEmployeeId = (employeeId) => {
    this.setState({ employeeId });
  };

  render() {
    const { employees, onDelete, onRouteChange } = this.props;
    return (
      <div className="row">
        <div className="col-sm-12">
          <CardInfo
            employees={employees}
            onDelete={onDelete}
            onRouteChange={onRouteChange}
          />
          );
        </div>
      </div>
    );
  }
}

//prop type for catching errors

export default CardList;
