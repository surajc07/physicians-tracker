import React from "react";
import Comment from "./Comment";
import Spinner from "react-bootstrap/Spinner";

export default function CommentList(props) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.comments.length}</span>{" "}
        Comment{props.comments.length > 0 ? "s" : ""}
      </h5>

      {!props.comments.length && props.loading ? (
        <Spinner animation="border" variant="danger" className="tc" />
      ) : props.comments.length === 0 && !props.loading ? (
        <div className="alert text-center alert-info">
          Be the first to comment
        </div>
      ) : (
        props.comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))
      )}
    </div>
  );
}
