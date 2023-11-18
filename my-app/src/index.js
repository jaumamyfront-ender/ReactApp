import reportWebVitals from "./reportWebVitals";
import state from "./Redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { addPost, updateNewPostText, Rerender } from "../src/Redux/State.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

let RerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          dialogs={state}
          DataMessages={state}
          addMessage={addPost}
          userpost={state}
          TextAreaValue={state}
          updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

RerenderEntireTree(state);
Rerender(RerenderEntireTree);
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
