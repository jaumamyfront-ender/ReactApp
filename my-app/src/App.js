import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import MainRoutes from "./components/Routes/Routes";

function App() {
  const dataforHeader = [
    {
      message: "its data and its work",
      age: 21,
      name: "dimych",
    },
  ];
  return (
    <div className="container">
      <Header data={dataforHeader} />
      <Sidebar />
      <MainRoutes />
    </div>
  );
}

export default App;
