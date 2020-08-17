import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--blue bg-lightest-blue"
        classtype="search"
        placeholder="search candidates"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
