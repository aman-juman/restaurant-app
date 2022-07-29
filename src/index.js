import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";
import { initialState } from "./context/initialState";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </Router>
);
