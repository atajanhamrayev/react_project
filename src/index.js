import store from "./data/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerendererEntireTree = (data) => {
  debugger;
  root.render(
    <Router>
      <App store={store} dispatch={store.dispatch.bind(store)} />
    </Router>
  );
};

rerendererEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerendererEntireTree(state);
});
