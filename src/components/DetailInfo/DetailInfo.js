import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "./DetailInfo.css";
import CommentList from "../Comments/CommentList";
import { Tabs, Tab } from "react-bootstrap";

class DetailInfo extends Component {
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
        <div className="tc shadow-5">
          <CommentList />
        </div>
      </FadeIn>
    );
  }
}

export default DetailInfo;
