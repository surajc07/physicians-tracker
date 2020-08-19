import React from "react";

const Comment = ({status, comment, commentor }) => {
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>Status: {status}</h2>
        <p>Comment: {comment}</p>
        <h4>Author: {commentor}</h4>
      </div>
    </div>
  );
};

export default Comment;
