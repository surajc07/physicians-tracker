import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { employees } from "./employees";
import * as FaIcons from "react-icons/fa";

class NewEmployee extends Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
      employees: employees,
      modalIsOpen: true,
    };
  }
  // Did not finish adding new employee
  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      event.target.className += " was-validated";

      const { employees, name } = this.state;
      console.log(form);
      this.setState({
        employees: employees.concat([
          {
            name: form.name.value,
            jobTitle: "jobTitle",
            department: "department",
            email: "email",
          },
        ]),
      });

      console.log(`Incorporated: ${name} with ${employees.length} employees`);
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

  render() {
    return (
      <div className="btn-group mr-2">
        <button
          type="button"
          className="btn btn-sm btn-info btn-rounded waves-effect grow bw2 shadow-5"
          onClick={() => this.handleModalShowHide()}
        >
          New Employee <FaIcons.FaUserPlus />
        </button>

        <Modal show={this.state.showHide} onHide={this.toggleModal}>
          <Form onSubmit={this.handleSubmit} noValidate>
            <Modal.Header
              closeButton
              onClick={() => this.handleModalShowHide()}
            >
              <Modal.Title>
                New Employee <FaIcons.FaUserFriends />
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group md="4" controlId="validation01">
                <Form.Label>
                  Name <FaIcons.FaUser />
                </Form.Label>

                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  onChange={this.changeHandler}
                  required
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validation02">
                <Form.Label>
                  Job Title <FaIcons.FaUserMd />
                </Form.Label>
                <Form.Control
                  type="text"
                  name="jobTitle"
                  placeholder="Enter job title"
                  onChange={this.changeHandler}
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid job title
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validation03">
                <Form.Label>
                  Department <FaIcons.FaBuilding />
                </Form.Label>
                <Form.Control
                  type="text"
                  name="department"
                  placeholder="Enter department"
                  onChange={this.changeHandler}
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid department
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validation04">
                <Form.Label>
                  Email <FaIcons.FaEnvelopeOpen />
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  onChange={this.changeHandler}
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email
                </Form.Control.Feedback>
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
                // onClick={() => this.addNewEmployee()}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default NewEmployee;
