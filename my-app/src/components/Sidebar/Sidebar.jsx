import React from "react";
import classes from "./sidebar.module.css";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "active__link" : "");

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__list}>
        <NavLink to="content" className={setActive}>
          Profile
        </NavLink>
        <NavLink to="friends" className={setActive}>
          Friends
        </NavLink>
        <NavLink to="/#" className={setActive}>
          News
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
