import React from "react";
import "./App.css";
import Header from "../src/components/Header/header-container";
import Sidebar from "./components/Sidebar/Sidebar";
import MainRoutes from "./components/Routes/Routes";
import Login from "./components/Login/Login";
import { connect, useDispatch, useSelector } from "react-redux";
import { AuthTHC } from "./components/Redux/reducer-auth";
import Preloader from "./components/Preloader/Preloader";
import { compose } from "redux";
import { InitializedTHC } from "./components/Redux/reducer.app";
import { WithAuthRedirect } from "./highOrderComponent/WithAuthRedirect";

class App extends React.Component {
  componentDidMount() {
    this.props.InitializedTHC();
  }
  render() {
    if (this.props.initialized === false ) {
      return <Preloader />;
    } else if (this.props.redirectToLogin === true) {
      return <Login />;
    }

    return (
      <div className="container">
        <Header />
        <Sidebar />
        <MainRoutes />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.Auth.initialized,
  redirectToLogin: state.Auth.redirectToLogin,
});

export default compose(connect(mapStateToProps, { InitializedTHC }))(App);

//problem with slow internet,if you are logged your profile not download correct,instead then loading login page but she shouldnt
//problem with fast internet-when you chose the some page then when page is loads we see the saem problem with component login,such as wee see the login page at the moment and affterall we see finnaly the our clicked page
//component login must return user on the page which was downloaded early ,like before user click the button unlogging
