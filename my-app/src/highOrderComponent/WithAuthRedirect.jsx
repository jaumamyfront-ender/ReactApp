import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const WithAuthRedirect = (Component) => {
  const WithAuthComponent = (props) => {
    const isAuth = useSelector((state) => state.Auth.isAuth);

    if (isAuth) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/login/" />;
    }
  };

  return WithAuthComponent;
};
