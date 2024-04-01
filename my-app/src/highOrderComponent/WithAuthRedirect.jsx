import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const WithAuthRedirect = (Component) => {
  const WithAuthComponent = (props) => {
    const isAuth = useSelector((state) => state.Auth.isAuth);
    const initialized = useSelector((state) => state.app.initialized);

    if (isAuth) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/login/" />;
    }
  };

  return WithAuthComponent;
};
  //  if (!this.props.initialized) {
  //    return <Preloader />;
  //  } else if (this.props.isAuth === false && !this.props.initialized) {
  //    return <Login />;
  //  }
