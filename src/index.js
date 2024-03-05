import store from "./data/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerendererEntireTree = () => {
  root.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
};

rerendererEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerendererEntireTree(state);
});
