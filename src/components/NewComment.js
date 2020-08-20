import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';


class NewComment extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    console.log(data);

    fetch('http://localhost:3000/users', {
      method: 'POST',
      body: {
        userId: data.userId,
        comment: data.comment,
        status: data.status,
        
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="userId">Enter username to comment on</label>
        <input id="userId" name="userId" type="number" />

        <label htmlFor="comment">Enter your comment</label>
        <input id="comment" name="comment" type="text" />

        <label htmlFor="status">Enter the status</label>
        <input id="status" name="status" type="text" />

        <button>Send data!</button>
      </form>
    );
  }
}
 
export default NewComment;
