import React from "react";

const SearchBox = ({ onSearchChange, value }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--blue bg-lightest-blue grow bw1 shadow-5"
        classtype="search"
        placeholder="search here"
        onChange={onSearchChange}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
