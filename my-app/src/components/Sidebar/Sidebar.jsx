import React from "react";
import classes from "./sidebar.module.css";
import { NavLink, Link, Outlet } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__list}>
        <NavLink
          to="content"
          className={({ isActive }) => (isActive ? "active__link" : "")}
        >
          Profile
        </NavLink>
        <NavLink
          to="messages"
          className={({ isActive }) => (isActive ? "active__link" : "")}
        >
          Messages
        </NavLink>
        <NavLink
          to="/#"
          className={({ isActive }) => (isActive ? "active__link" : "")}
        >
          News
        </NavLink>
        <NavLink
          to="/#"
          className={({ isActive }) => (isActive ? "active__link" : "")}
        >
          Music
        </NavLink>
        <NavLink
          to="/#"
          className={({ isActive }) => (isActive ? "active__link" : "")}
        >
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
