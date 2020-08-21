import React, {Component} from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import { comments } from "../comments";


// add Comment
// list all comments w/ status
// each comment should track who wrote it
class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      comments: comments,
      id: 0,
    };
  }
  

  //when it can be tied to a user change this code
  // not the most efficient solution but it works
  isUserComment = (comment, id) => {
    if (comment.userId == id) {
      return true
    }
    return false 
    /* was testing filtering
    var rand = Math.floor(Math.random() * 2);
    console.log(rand);
    return rand;
    */
  }


  render() { 
    var selectedCardId = localStorage.getItem("selectedCard");
    //console.log("selectedCardId 2: ", JSON.parse(selectedCardId));
    var cardObj = JSON.parse(selectedCardId);
    return ( 
      <div >
      <div>
        <NewComment />
      </div>
        {comments && comments.map((user, i) => {
        
        if (this.isUserComment(comments[i], cardObj.id)) {
        return (
          <Comment
            key={i}
            id={comments[i].id}
            status={comments[i].status}
            comment={comments[i].comment}
            commentor={comments[i].commentor}
          />
        )};
      })}
      
    </div>
     );
  }
}
 
export default CommentList;