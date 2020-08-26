import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--blue bg-lightest-blue grow bw1 shadow-5"
        classtype="search"
        placeholder="search employees"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
