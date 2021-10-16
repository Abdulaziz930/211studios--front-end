import React from "react";
import ReactDOM from "react-dom";
import App from "./components/root/App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "lion-player/dist/lion-skin.min.css";
import "./scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
