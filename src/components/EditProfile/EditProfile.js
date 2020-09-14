import React, { Component } from "react";
import { Modal, Button, Form, Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import * as FaIcons from "react-icons/fa";
import "./EditProfile.css";

class EditProfile extends Component {
  state = {
    showHide: false,
    modalIsOpen: true,
  };

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen,
    }));
  };
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

  render() {
    const { selectedCardObj, profileType } = this.props;
    return (
      <div>
        <button
          className="btn btn-sm btn-info btn-rounded waves-effect grow bw2 shadow-5"
          onClick={() => this.handleModalShowHide()}
        >
          Edit Profile <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </button>

        <Modal
          show={this.state.showHide}
          onHide={this.toggleModal}
          size="xl"
          centered
        >
          <Form onSubmit={this.handleSubmit} noValidate>
            <Modal.Header
              closeButton
              onClick={() => this.handleModalShowHide()}
            >
              <Modal.Title>
                Update {profileType} <FaIcons.FaFileMedicalAlt />
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group md="4" controlId="validation01">
                <Container>
                  <Row>
                    <Col xs={3} md={3}>
                      <div className="edit-profile-img">
                        <img
                          src={`https://robohash.org/${selectedCardObj.empId}`}
                          alt=""
                        />
                        <div className="edit-file btn btn-lg btn-info btn-rounded waves-effect grow bw2 shadow-5">
                          Change Photo
                          <input type="edit-file" name="edit-file" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={3} md={3}>
                      <Form.Label>
                        First Name <FaIcons.FaUser />
                      </Form.Label>

                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        onChange={this.changeHandler}
                        required
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid first name
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={3} md={3}>
                      <Form.Label>Middle Name</Form.Label>

                      <Form.Control
                        type="text"
                        name="middleName"
                        placeholder="Enter middle name"
                        onChange={this.changeHandler}
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid middle name
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={3} md={3}>
                      <Form.Label>Last Name</Form.Label>

                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        onChange={this.changeHandler}
                        required
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid last name
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
              <Form.Group md="4" controlId="validation02">
                <Container>
                  <Row>
                    <Col xs={3} md={3}>
                      <Form.Label>
                        Degree <FaIcons.FaGraduationCap />
                      </Form.Label>

                      <Form.Control
                        type="text"
                        name="degree"
                        placeholder="Enter degree"
                        onChange={this.changeHandler}
                        required
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Degree
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={3} md={3}>
                      <Form.Label>
                        Status <FaIcons.FaUnlockAlt />
                      </Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue="Choose Status..."
                        onChange={this.changeHandler}
                        name="status"
                        required
                      >
                        <option>Active</option>
                        <option>Inactive</option>
                      </Form.Control>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid status
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={3} md={3}>
                      <Form.Label>
                        Hired Date <FaIcons.FaCalendarAlt />
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="hiredDate"
                        onChange={this.changeHandler}
                        placeholder="Hired Date"
                      ></Form.Control>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid hired date
                      </Form.Control.Feedback>
                    </Col>

                    <Col xs={3} md={3}>
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
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
              <Form.Group md="4" controlId="validation03">
                <Container>
                  <Row>
                    <Col xs={4} md={4}>
                      <Form.Label>
                        Schedule Percentage <FaIcons.FaClock />
                      </Form.Label>

                      <Form.Control
                        type="number"
                        name="schedulePercentage"
                        placeholder="Enter schedule percentage"
                        onChange={this.changeHandler}
                        min="0"
                        max="100"
                        required
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid schedule percentage
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={4} md={4}>
                      <Form.Label>Schedule Type </Form.Label>

                      <Form.Control
                        type="text"
                        name="scheduleType"
                        placeholder="Enter schedule type"
                        onChange={this.changeHandler}
                        required
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid schedule type
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={4} md={4}>
                      <Form.Label>Schedule Hours </Form.Label>

                      <Form.Control
                        type="number"
                        name="scheduleHours"
                        placeholder="Enter schedule hours"
                        onChange={this.changeHandler}
                        min="0"
                        required
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid schedule hours
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
              <Form.Group md="4" controlId="validation04">
                <Container>
                  <Row>
                    <Col xs={4} md={4}>
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
                    </Col>
                    <Col xs={4} md={4}>
                      <Form.Label>Department ID</Form.Label>
                      <Form.Control
                        type="text"
                        name="departmentId"
                        placeholder="Enter Department ID"
                        onChange={this.changeHandler}
                        required
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Department ID
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={4} md={4}>
                      <Form.Label>Business Unit</Form.Label>
                      <Form.Control
                        type="text"
                        name="businessUnit"
                        placeholder="Enter business unit"
                        onChange={this.changeHandler}
                        required
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid business unit
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
              <Form.Group md="4" controlId="validation05">
                <Container>
                  <Row>
                    <Col xs={12} md={12}>
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
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
            </Modal.Body>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default EditProfile;
