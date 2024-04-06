import React from "react";
import "./App.css";
import Header from "../src/components/Header/header-container";
import Sidebar from "./components/Sidebar/Sidebar";
import MainRoutes from "./components/Routes/Routes";
import Login from "./components/Login/Login";
import { connect, useDispatch, useSelector } from "react-redux";
import Preloader from "./components/Preloader/Preloader";
import { compose } from "redux";
import { InitializedTHC } from "./components/Redux/reducer.app";


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


