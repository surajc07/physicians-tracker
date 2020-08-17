import React from "react";
import Card from "./Card";

const CardList = ({ candidates }) => {
  return (
    <div>
      {candidates.map((user, i) => {
        return (
          <Card
            key={i}
            id={candidates[i].id}
            name={candidates[i].name}
            jobTitle={candidates[i].jobTitle}
            department={candidates[i].department}
            email={candidates[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
