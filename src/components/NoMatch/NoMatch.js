import React from "react";
import "./NoMatch.css";
import FadeIn from "react-fade-in";

const NoMatch = () => {
  return (
    // <div className="tc">
    //   <h1 className="display-2">Page Not Found</h1>
    // </div>
    <FadeIn>
      <div
        className="d-flex justify-content-center align-items-center"
        id="main"
      >
        <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">
          404
        </h1>
        <div className="inline-block align-middle">
          <h2 className="font-weight-normal lead" id="desc">
            The page you requested was not found.
          </h2>
        </div>
      </div>
    </FadeIn>
  );
};

export default NoMatch;
