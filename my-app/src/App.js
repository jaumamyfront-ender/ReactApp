import React from "react";
import "./App.css";
import Header from "../src/components/Header/header-container";
import Sidebar from "./components/Sidebar/Sidebar";
import MainRoutes from "./components/Routes/Routes";

function App(props) {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <MainRoutes />
    </div>
  );
}

export default App;
