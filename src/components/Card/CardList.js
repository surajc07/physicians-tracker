import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      route: "",
    };
    this.onRouteChange = this.onRouteChange.bind(this);
  }
  onRouteChange(route) {
    this.setState({ route: route });
  }

  render() {
    const { employees, onDelete, onRouteChange } = this.props;
    return (
      <div>
        {employees.map((user, i) => {
          return (
            <Card
              key={i}
              id={employees[i].id}
              name={employees[i].name}
              jobTitle={employees[i].jobTitle}
              department={employees[i].department}
              email={employees[i].email}
              tasksDue={employees[i].tasksDue}
              degree={employees[i].degree}
              hireDate={employees[i].hireDate}
              scheduleHours={employees[i].scheduleHours}
              businessPhone={employees[i].businessPhone}
              cellPhone={employees[i].cellPhone}
              onDelete={onDelete}
              onRouteChange={onRouteChange}
            />
          );
        })}
      </div>
    );
  }
}

//prop type for catching errors

export default CardList;
