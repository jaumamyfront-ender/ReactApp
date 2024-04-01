import React from "react";
import classes from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import { GetUserProfileTHC } from "../Redux/reducer-content";
import { useDispatch } from "react-redux";

const setActive = ({ isActive }) => (isActive ? "active__link" : "unactive__link");

const Sidebar = () => {
  const dispatch = useDispatch();
  const ReturnToMyProfile = () => {
    let userId = 2;

    dispatch(GetUserProfileTHC(userId));
    console.log("yes you click on me");
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__list}>
        <NavLink to="profile" className={setActive} onClick={ReturnToMyProfile}>
          Profile
        </NavLink>
        <NavLink to="friends" className={setActive}>
          Friends
        </NavLink>
        <NavLink to="dialogs" className={setActive}>
          Messages
        </NavLink>
        <NavLink to="/#" className={setActive}>
          Music
        </NavLink>
        <NavLink to="/#" className={setActive}>
          Settings
        </NavLink>
      </div>
      <div className={classes.sidebar__friends}>
        <NavLink to="/#" alt="/#" className={classes.qqq}>
          Friends
        </NavLink>
        <div className={classes.userspictures}>
          <img></img>
        </div>
        <div className={classes.userspictures}>
          <img></img>
        </div>
        <div className={classes.userspictures}>
          <img></img>
        </div>
        <div className={classes.users__name}>sdfsd</div>
        <div className={classes.users__name}>fdsfs</div>
        <div className={classes.users__name}>fdsfsd</div>
      </div>
    </div>
  );
};
export default Sidebar;
