import React from "react";
import { Modal, Button, Form } from "react-bootstrap";


const newCommentButton = () => {
  return (
    <div>
      
    </div>
  )

}


const NewComment = () => {
  return (
    <div className="ph3">
      <button
        type="button"
        class="btn btn-outline-info btn-rounded waves-effect"
        onClick={newCommentButton()}
      >
        New Comment
      </button>
    </div>
  );
};

export default NewComment;
