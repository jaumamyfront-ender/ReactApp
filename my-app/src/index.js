// import state from "./Redux/State";//f pr
// import { addPost, updateNewPostText, Rerender } from "../src/Redux/State.js"; //f pr
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.js";
import store from "./Redux/State.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

let RerenderEntireTree = (state) => {
  console.log(state);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App dispatch={store.dispatch.bind(store)} state={state} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

RerenderEntireTree(store.getState());
store.Rerender(RerenderEntireTree);
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
