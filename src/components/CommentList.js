import React from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";

// add Comment
// list all comments w/ status
// each comment should track who wrote it
const CommentList = ({comments }) => {
  return (
    <div >
      <div>
        <NewComment />
      </div>
        {comments && comments.map((user, i) => {
        
        //if (comments[i].userID === id) {
        return (
          <Comment
            key={i}
            id={comments[i].id}
            status={comments[i].status}
            comment={comments[i].comment}
            commentor={comments[i].commentor}
          />
        
        )/*}*/;
      })}
      
    </div>
  );
};

export default CommentList;
