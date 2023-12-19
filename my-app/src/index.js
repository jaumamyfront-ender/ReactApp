import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.js";
import store from "./components/Redux/redux-store.js";

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

RerenderEntireTree(store.getState()); //первый вызов функции с вызовом метода для получения данных и их сл.передачи дальше
store.subscribe(() => {
  let state = store.getState();
  RerenderEntireTree(state);
});
reportWebVitals();
