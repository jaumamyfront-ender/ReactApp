import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import MainRoutes from "./components/Routes/Routes";
import { useSelector } from "react-redux";

function App(props) {
  console.log(props);
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <MainRoutes
        data={props.state.MessagesPage.dialogsDataUsersList}
        DataMessages={props.state.MessagesPage.dialogsDataUsersMessage}
        usrpost={props.state.Profile.AddProfilePost}
        TextArea={props.state.Profile.NewPostText}
        dispatch={props.dispatch}
        state={props.state}
      />
    </div>
  );
}

export default App;
