import React, { Component } from "react";
import axios from "axios";

export default class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      error: "",

      comment: {
        employeeId: "",
        firstName: "",
        message: "",
        createdAt: "",
      },
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value,
      },
    });
  };

  isFormValid() {
    return (
      this.state.comment.firstName !== "" && this.state.comment.message !== ""
    );
  }

  /**
   * Form submit handler
   */
  onSubmit = async (e) => {
    var selectedCardId = localStorage.getItem("selectedCard");
    var selectedCardObj = JSON.parse(selectedCardId);
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    // loading status and clear error
    this.setState({ error: "", loading: true });

    // persist the comments on server
    let { comment } = this.state;
    comment.employeeId = selectedCardObj.empId;

    await axios
      .post(process.env.REACT_APP_API_EMPLOYEES_COMMENTS, { comment })
      .then((res) => {
        // add time return from api and push comment to parent state
        comment.createdAt = res.data.createdAt;
        this.props.addComment(comment);
        // console.log("CommentForm comment: ", comment);
        // Note: All params in comment need to be cleared here
        this.setState({
          loading: false,
          comment: { ...comment, message: "", firstName: "", createdAt: "" },
        });
      })
      .catch((err) => {
        this.setState({
          error: "Something went wrong while submitting form: " + err,
          loading: false,
        });
      });
  };

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.firstName}
              className="form-control"
              placeholder="😎 Your Name"
              name="firstName"
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder="🤬 Your Comment"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button
              disabled={this.state.loading}
              className="btn btn-sm btn-info btn-rounded waves-effect grow bw2 shadow-5"
            >
              Comment ➤
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
