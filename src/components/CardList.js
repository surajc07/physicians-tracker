import React from "react";
import Card from "./Card";

const CardList = ({ employees }) => {
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
          />
        );
      })}
    </div>
  );
};

//prop type for catching errors

export default CardList;
