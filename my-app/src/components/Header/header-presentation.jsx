import React from "react";
import raster from "../../assets/download.gif";
import classes from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.headerImage}>
        <img src={raster} alt="/#"></img>
        <p></p>
      </div>
      <div className={classes.login}>
        {props.isAuth ? (
          <p>{props.Login}</p>
        ) : (
          <NavLink to={"/login"}>Log In</NavLink>
        )}
      </div>
    </div>
  );
};
export default Header;
