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

  render() {
    const { employees, onDelete, onRouteChange } = this.props;
    return (
      <div className="row">
        <div className="col-sm-12">
          {employees.map((user, i) => {
            return (
              <CardInfo
                key={i}
                empId={employees[i].empId}
                empName={employees[i].empFirstNm + " " + employees[i].empLastNm}
                empDegree={employees[i].empDegree}
                empStatus={employees[i].empJobStatus}
                empHireDtm={employees[i].empHireDtm}
                empJobTitle={employees[i].empJobTitle}
                empJobTitleCode={employees[i].empJobTitleCode}
                empSchedulePct={employees[i].empSchedulePct}
                empScheduleType={employees[i].empScheduleType}
                empScheduleHrs={employees[i].empScheduleHrs}
                empBusUnit={employees[i].empBusUnit}
                empDeptDesc={employees[i].empDeptDesc}
                empEmail={employees[i].empEmail}
                empTaskId={employees[i].empTaskId}
                empTaskName={employees[i].empTaskName}
                empTaskStatus={employees[i].empTaskStatus}
                onDelete={onDelete}
                onRouteChange={onRouteChange}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

//prop type for catching errors

export default CardList;
