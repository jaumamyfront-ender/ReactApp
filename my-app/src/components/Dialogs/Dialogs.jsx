import React from "react";
import classes from "./dialogs.module.css";
import { NavLink } from "react-router-dom";
const setActive = ({ isActive }) => (isActive ? "active__link" : "");

export default function Dialogs() {
  return (
    <div className="Wrapper">
      <div className={classes.Container}>
        <div className={classes.Head}>
          <p>Dialogs</p>
        </div>
        <div className={`${classes.SideBar} ${classes.LeftWrapper}`}>
          <NavLink to="/#" alt="/#" className={classes.sidebar__items}>
            Andrew
          </NavLink>
          <NavLink to="/#" alt="/#" className={classes.sidebar__items}>
            Friends
          </NavLink>
          <NavLink to="/#" alt="/#" className={classes.sidebar__items}>
            Friends
          </NavLink>
          <NavLink to="/#" alt="/#" className={classes.sidebar__items}>
            Friends
          </NavLink>
          <NavLink to="/#" alt="/#" className={classes.sidebar__items}>
            Friends
          </NavLink>
          <NavLink to="/#" alt="/#" className={classes.sidebar__items}>
            Friends
          </NavLink>
          <NavLink to="/#" alt="/#" className={classes.sidebar__items}>
            Friends
          </NavLink>
          <NavLink to="/#" alt="/#" className={classes.sidebar__items}>
            Friends
          </NavLink>
          <NavLink to="/#" alt="/#" className={classes.sidebar__items}>
            Friends
          </NavLink>
          <NavLink to="/#" alt="/#" className={classes.sidebar__items}>
            Friends
          </NavLink>
        </div>
        <div className={classes.Barrier}></div>
        <div className={`${classes.SideBar} ${classes.RightWrapper}`}>
          <div className={classes.rightWrapper__items}>
            <div className={classes.user__info}>
              <div className={classes.user__picture}></div>
              <div className={classes.user__name}></div>
            </div>
            <div className={classes.user__message}>
              <p>im your Friends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
