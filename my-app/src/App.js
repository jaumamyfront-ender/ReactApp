import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import MainRoutes from "./components/Routes/Routes";

function App(props) {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <MainRoutes
        data={props.dialogs.MessagesPage.dialogsDataUsersList}
        DataMessages={props.DataMessages.MessagesPage.dialogsDataUsersMessage}
        addMessage={props.addMessage}
        usrpost={props.userpost.Profile.AddProfilePost}
      />
    </div>
  );
}

export default App;
