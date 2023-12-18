// import state from "./Redux/State";//f pr
// import { addPost, updateNewPostText, Rerender } from "../src/Redux/State.js"; //f pr
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.js";
import store from "./Redux/redux-store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

let RerenderEntireTree = (store) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

RerenderEntireTree(store.getState());

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// store.Rerender(RerenderEntireTree);
// dispatch={store.dispatch.bind(store)}
// RerenderEntireTree(store);
// import store from "./Redux/State.js";
