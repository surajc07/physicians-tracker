import React, { Component } from "react";
import axios from "axios";
class NewComment extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: 0,
      userId: 0,
      comment: "",
      status: "",
      commentor: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCommentInput = this.handleCommentInput.bind(this);
    this.handleStatusInput = this.handleStatusInput.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    event.persist();
    const form = event.target;
    const data = new FormData(form);
    console.log(data.value);
    var selectedCardId = localStorage.getItem("selectedCard");
    //console.log("selectedCardId 2: ", JSON.parse(selectedCardId));
    var cardObj = JSON.parse(selectedCardId);

    console.log(data);
    console.log(this.state);
    console.log(event.target[0].value);
    this.setState({
      userId: cardObj.id,
      status: event.target[1].value,
      comment: event.target[0].value,
    });
    console.log(this.state);
    const test = {
      userId: cardObj.id,
      status: event.target[1].value,
      comment: event.target[0].value,
    };
    /*
    axios({
      method: "POST",
      url:"http://localhost:3000/addcomment",
      data:  test
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
*/

    fetch("http://localhost:3000/addcomment", {
      method: "POST",
      body: {
        test,
        testing: "test",
      },
    });
  }
  handleChange(name, event) {
    event.persist();
    this.setState({ [name]: event.target.value }, function () {
      console.log(this.state);
    });
  }
  resetForm() {
    this.setState({ status: "", comment: "" });
  }
  handleCommentInput(e) {
    const commentInput = e.target.value;
    this.setState({ comment: commentInput });
  }
  handleStatusInput(e) {
    const statusInput = e.target[1].value;
    this.setState({ status: statusInput }, () => {
      console.log(this.state.status, "status");
    });
  }
  render() {
    return (
      <div>
        <form
          className="form-control"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <label htmlFor="comment">Enter your comment</label>
          <input
            id="comment"
            name="comment"
            type="text"
            onChange={() => this.handleCommentInput}
            value={this.state.value}
          />
          <label htmlFor="status">Enter the status</label>
          <input
            id="status"
            name="status"
            type="text"
            onChange={() => this.handleStatusInput}
            value={this.state.value}
          />
          <button className="btn btn-primary">Add Comment</button>
        </form>
      </div>
    );
  }
}

export default NewComment;
