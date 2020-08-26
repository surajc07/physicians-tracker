import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #4b698b;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #4b698b;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand onClick={() => onRouteChange("home")}>
            Physicians Tracking Tool
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* Add New Page/Link here */}
              <Nav.Item>
                <Nav.Link onClick={() => onRouteChange("employee")}>
                  Employees
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => onRouteChange("candidate")}>
                  Candidates
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link onClick={() => onRouteChange("signout")}>
                  Sign out
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  } else {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link onClick={() => onRouteChange("signin")}>
                  Sign in
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => onRouteChange("register")}>
                  Register
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
};

export default Navigation;
