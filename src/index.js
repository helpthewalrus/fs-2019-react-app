import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { ErrorBoundary } from "./components/ErrorBoundary";

import "./styles/index.scss";

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);
