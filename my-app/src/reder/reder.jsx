import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import App from "../App.js";
import { BrowserRouter } from "react-router-dom";
import { addPost, updateNewPostText } from "../Redux/State.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

export let RerenderEntireTree = (state) => {
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
