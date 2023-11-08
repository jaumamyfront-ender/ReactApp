import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
let dialogsDataUsersList = [
  { id: 1, name: "dimych" },
  { id: 2, name: "sveta" },
  { id: 3, name: "tanja" },
  { id: 4, name: "andrey" },
  { id: 5, name: "taras" },
  { id: 6, name: "bogdan" },
  { id: 7, name: "vera" },
  { id: 8, name: "lera" },
  { id: 9, name: "sergei" },
  { id: 0, name: "danil" },
];
let dialogsDataUsersMessage = [
  {
    id: 0,
    message: "i am your friend,bro,what are you thinking about this",
    name: "dimon ",
  },
  { id: 1, message: "yoooooooooooooooooooooo", name: "andrew" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        dialogs={dialogsDataUsersList}
        DataMessages={dialogsDataUsersMessage}
      />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
