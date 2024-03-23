import React, { useEffect } from "react";
import raster from "../../assets/download.gif";
import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
import { logoutTHC } from "../Redux/reducer-auth";
import { useDispatch } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch()
  const off =()=>{
   
      dispatch(logoutTHC())
    
  }



  return (
    <div className={classes.header}>
      <div className={classes.headerImage}>
        <img src={raster} alt="/#"></img>
        <p></p>
      </div>
      <div className={classes.login}>
        {props.isAuth ? ( <div><p>{props.Login}</p><span onClick={off}>Log Out</span> </div>) : (<NavLink to={"/login"}>Log In</NavLink>)}
      </div>
    </div>
  );
};
export default Header;
