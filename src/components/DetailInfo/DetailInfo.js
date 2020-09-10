import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "./DetailInfo.css";
import { Tabs, Tab } from "react-bootstrap";
import CommentList from "../Comments/CommentList";
import CommentForm from "../Comments/CommentForm";
import axios from "axios";

class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      loading: false,
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    console.log("addComment comment:", comment);
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

    await axios
      .get(process.env.REACT_APP_API_COMMENTS + `?q=${selectedCardObj.empId}`)
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
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src={`https://robohash.org/${selectedCardObj.empId}`}
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
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
                    {selectedCardObj.empFirstNm +
                      " " +
                      selectedCardObj.empLastNm}
                  </h5>
                  <h6>{selectedCardObj.empJobTitle}</h6>

                  <div className="tab-wrapper">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-12">
                          <Tabs defaultActiveKey="about">
                            <Tab eventKey="about" title="About">
                              <div className="tab-item-wrapper">
                                <h5>Home Dashbord</h5>

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
                                <h5>Profile Details</h5>

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
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
          </form>
        </div>

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
