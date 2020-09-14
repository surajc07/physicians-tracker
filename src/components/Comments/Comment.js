import React from "react";
import "./Comment.css";

export default function Comment(props) {
  const {
    employeeId,
    firstName,
    middleName,
    lastName,
    message,
    createdAt,
  } = props.comment;

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://robohash.org/${firstName}`}
        alt={employeeId}
      />

      <div className="commentContainer media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{createdAt}</small>
        <h6 className="mt-0 mb-1 text-muted">
          {firstName}&nbsp;{!!middleName ? middleName : ""}&nbsp;{lastName}
        </h6>
        {message}
      </div>
    </div>
  );
}
