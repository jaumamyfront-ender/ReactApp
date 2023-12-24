import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import MainRoutes from "./components/Routes/Routes";

function App(props) {
  console.log(props);
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <MainRoutes />
    </div>
  );
}

export default App;
