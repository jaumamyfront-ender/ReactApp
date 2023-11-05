import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import MainRoutes from "./components/Routes/Routes";

function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <MainRoutes />
      {/* <Dialogs /> */}
    </div>
  );
}

export default App;
