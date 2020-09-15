import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "./DetailInfo.css";
import { Tabs, Tab } from "react-bootstrap";
import CommentList from "../Comments/CommentList";
import CommentForm from "../Comments/CommentForm";
import EditProfile from "../EditProfile/EditProfile";
import axios from "axios";
require("dotenv").config();

//Gets the environment from the .env file
const environment = process.env.NODE_ENV;

class DetailInfo extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      loading: false,
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments],
    });
  }

  componentDidMount = async () => {
    var selectedCardId = localStorage.getItem("selectedCard");
    var selectedCardObj = JSON.parse(selectedCardId);
    // loading
    this.setState({ loading: true });

    var API_COMMENTS = "";
    if (environment === "development")
      API_COMMENTS = process.env.REACT_APP_DEV_API_EMPLOYEES_COMMENTS;
    else if (environment === "production")
      API_COMMENTS = process.env.REACT_APP_PROD_API_EMPLOYEES_COMMENTS;

    await axios
      .get(API_COMMENTS + `?q=${selectedCardObj.empId}`)
      .then((res) => {
        this.setState({
          comments: res.data,
          loading: false,
        });
      });
  };

  render() {
    var selectedCardId = localStorage.getItem("selectedCard");
    //console.log("selectedCardId 2: ", JSON.parse(selectedCardId));
    var selectedCardObj = JSON.parse(selectedCardId);

    return (
      <FadeIn>
        <div className="container emp-profile shadow-5">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src={`https://robohash.org/${selectedCardObj.empId}`}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5>
                  {selectedCardObj.empFirstNm + " " + selectedCardObj.empLastNm}
                </h5>
                <h6>{selectedCardObj.empJobTitle}</h6>

                <div className="tab-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-12">
                        <Tabs defaultActiveKey="about">
                          <Tab eventKey="about" title="About">
                            <div className="tab-item-wrapper">
                              <h5>Profile Details</h5>

                              <div className="row">
                                <div className="col-md-6">
                                  <label>Party Id</label>
                                </div>
                                <div className="col-md-6">
                                  <p>{selectedCardObj.empPartySid}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                  <p>
                                    {selectedCardObj.empFirstNm +
                                      " " +
                                      selectedCardObj.empLastNm}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Email</label>
                                </div>
                                <div className="col-md-6">
                                  <p>{selectedCardObj.empEmail}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Phone</label>
                                </div>
                                <div className="col-md-6">
                                  <p>{selectedCardObj.empCellPhone}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Profession</label>
                                </div>
                                <div className="col-md-6">
                                  <p>{selectedCardObj.empJobTitle}</p>
                                </div>
                              </div>
                            </div>
                          </Tab>

                          <Tab eventKey="tasks" title="Tasks">
                            <div className="tab-item-wrapper">
                              <h5>Task Details</h5>

                              <div className="row">
                                <div className="col-md-6">
                                  <label>Course</label>
                                </div>
                                <div className="col-md-6">
                                  <p>{selectedCardObj.empTaskName}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Status</label>
                                </div>
                                <div className="col-md-6">
                                  <p>{selectedCardObj.empTaskStatus}</p>
                                </div>
                              </div>
                            </div>
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <EditProfile
                selectedCardObj={selectedCardObj}
                profileType={"Employee"}
              />
            </div>
          </div>
        </div>
        {/* Comments Section */}
        <div className="container emp-profile bg-light shadow-5">
          <header className="Comment-header">
            <h1 className="Comment-title">
              Comments
              <span className="px-2" role="img" aria-label="Chat">
                💬
              </span>
            </h1>
          </header>

          <div className="row">
            <div className="col-4  pt-3 border-right">
              <h6>Say something about this person</h6>
              <CommentForm
                addComment={this.addComment}
                employeeId={selectedCardObj.empId}
              />
            </div>
            <div className="col-8  pt-3 bg-white">
              <CommentList
                loading={this.state.loading}
                comments={this.state.comments}
                employeeId={selectedCardObj.empId}
              />
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default DetailInfo;
