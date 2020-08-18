import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
