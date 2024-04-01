import React from "react";
import "./App.css";
import Header from "../src/components/Header/header-container";
import Sidebar from "./components/Sidebar/Sidebar";
import MainRoutes from "./components/Routes/Routes";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { AuthTHC } from "./components/Redux/reducer-auth";

function App(props) {
  let isAuth = useSelector((state) => state.Auth.isAuth);
  let downloadCookieLocal = useDispatch();
  downloadCookieLocal(AuthTHC());

  return (
    <div>
      {!isAuth ? (
        <Login />
      ) : (
        <div className="container">
          <Header />
          <Sidebar />
          <MainRoutes />
        </div>
      )}
    </div>
  );
}

export default App;

//problem with slow internet,if you are logged your profile not download correct,instead then loading login page but she shouldnt
//problem with fast internet-when you chose the some page then when page is loads we see the saem problem with component login,such as wee see the login page at the moment and affterall we see finnaly the our clicked page
//component login must return user on the page which was downloaded early ,like before user click the button unlogging
