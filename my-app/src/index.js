import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.js";
import store from "./components/Redux/State.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

let RerenderEntireTree = (state) => {
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
