import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';


class NewComment extends Component {
  state = { 
   }
  
   handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      event.target.className += " was-validated";
    }
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen,
    }));
  };

  // this will send the data to the DB, 
  // which should auto-update whereever they are displayed
  addNewComment() {


  }

  render() { 
    return (  
      <div>
          <div className="ph3">
        <button
          type="button"
          className="btn btn-outline-info btn-rounded waves-effect"
          onClick={() => this.handleModalShowHide()}
        >
          <i className="fa fa-user-plus mr-1"></i>
          Add Comment
        </button>
        <Modal show={this.state.showHide} onHide={this.toggleModal}>
          <Form onSubmit={this.handleSubmit} noValidate>
            <Modal.Header
              closeButton
              onClick={() => this.handleModalShowHide()}
            >
              <Modal.Title>
                Add Comment <i className="fa fa-poll-people"></i>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body> 
             
              <Form.Group md="4" controlId="validation01">
                <Form.Label>
                  Comment <i className="fa fa-user"></i>
                </Form.Label>

                <Form.Control
                  type="text"
                  name="Comment"
                  placeholder="Enter your comment"
                  onChange={this.changeHandler}
                  required
                />

              </Form.Group>

              <Form.Group md="4" controlId="validation01">
                <Form.Label>
                  User ID (placeholder, should be list) <i className="fa fa-user"></i>
                </Form.Label>

                <Form.Control
                  type="numeric"
                  name="userId"
                  placeholder="Enter their ID"
                  onChange={this.changeHandler}
                  required
                />

              </Form.Group>

             <Form.Group md="4" controlId="validation01">
                <Form.Label>
                  Author ID (placeholder, should be automated to logged in user) <i className="fa fa-user"></i>
                </Form.Label>

                <Form.Control
                  type="numeric"
                  name="commentor"
                  placeholder="Enter your ID"
                  onChange={this.changeHandler}
                  required
                />

              </Form.Group>
              <Form.Group md="4" controlId="validation01">
                <Form.Label>
                  Status (placeholder, should be dropdown list) <i className="fa fa-user"></i>
                </Form.Label>

                <Form.Control
                  type="text"
                  name="status"
                  placeholder="Enter the status, Active/Delete"
                  onChange={this.changeHandler}
                  required
                />

              </Form.Group>

            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => this.handleModalShowHide()}
              >
                Close
              </Button>

              <Button
                type="submit"
                variant="primary"
                onClick={() => this.addNewComment()}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
      </div>
    );
  }
}
 
export default NewComment;
