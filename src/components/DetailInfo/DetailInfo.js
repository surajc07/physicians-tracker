import React, { Component } from "react";
import FadeIn from "react-fade-in";
import "./DetailInfo.css";

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

                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Tasks
                      </a>
                    </li>
                  </ul>
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
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Work Info</p>
                  <a href="!#">Website Link</a>
                  <br />
                  <a href="!#">Bootsnipp Profile</a>
                  <br />
                  <a href="!#">Bootply Profile</a>
                  <p>SKILLS</p>
                  <a href="!#">Web Designer</a>
                  <br />
                  <a href="!#">Web Developer</a>
                  <br />
                  <a href="!#">WordPress</a>
                  <br />
                  <a href="!#">WooCommerce</a>
                  <br />
                  <a href="!#">PHP, .Net</a>
                  <br />
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
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
                          {!!selectedCardObj.empName
                            ? selectedCardObj.empName
                            : selectedCardObj.empFirstNm +
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
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
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
                    <div className="row">
                      <div className="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </FadeIn>
    );
  }
}

export default DetailInfo;
