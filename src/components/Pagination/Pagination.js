import React from "react";
import "./Pagination.css";

const Pagination = ({
  resultsPerPage,
  totalResults,
  onPaginateChange,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={currentPage > 1 ? "page-item" : "page-item disabled"}>
          <a
            onClick={() => onPaginateChange("previous")}
            href="!#"
            tabIndex="-1"
            className="page-link grow shadow-5"
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => onPaginateChange(number)}
              href="!#"
              className="page-link grow shadow-5"
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={
            totalResults > currentPage * resultsPerPage
              ? "page-item"
              : "page-item disabled"
          }
        >
          <a
            onClick={() => onPaginateChange("next")}
            href="!#"
            className="page-link grow shadow-5"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
