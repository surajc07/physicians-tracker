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
          />
        );
      })}
    </div>
  );
};

export default CardList;
