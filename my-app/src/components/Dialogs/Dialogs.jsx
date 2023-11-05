import React from "react";
import classes from "./dialogs.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Dialogs() {
  const { pathname } = useLocation();
  return (
    <div className="Wrapper">
      <div className={classes.Container}>
        <div className={classes.Head}>
          <p>Dialogs</p>
        </div>
        <div className={`${classes.SideBar} ${classes.LeftWrapper}`}>
          <NavLink
            to="/dialogs/1"
            alt="/#"
            style={{
              color: pathname.includes("dialogs/1") ? "red" : "grey",
              fontWeight: pathname.includes("dialogs/1") ? "700" : "300",
              fontSize: pathname.includes("dialogs/1") ? "32px" : "22px",
            }}
            className={classes.sidebar__items}
          >
            Andrew
          </NavLink>
          <NavLink
            to="/dialogs/2"
            alt="/#"
            style={{
              color: pathname.includes("dialogs/2") ? "red" : "grey",
              fontWeight: pathname.includes("dialogs/2") ? "700" : "300",
              fontSize: pathname.includes("dialogs/2") ? "32px" : "22px",
            }}
            className={classes.sidebar__items}
          >
            Andrew
          </NavLink>
          <NavLink
            to="/dialogs/3"
            alt="/#"
            style={{
              color: pathname.includes("dialogs/3") ? "red" : "grey",
              fontWeight: pathname.includes("dialogs/3") ? "700" : "300",
              fontSize: pathname.includes("dialogs/3") ? "32px" : "22px",
            }}
            className={classes.sidebar__items}
          >
            Andrew
          </NavLink>
          <NavLink
            to="/dialogs/4"
            alt="/#"
            style={{
              color: pathname.includes("dialogs/4") ? "red" : "grey",
              fontWeight: pathname.includes("dialogs/4") ? "700" : "300",
              fontSize: pathname.includes("dialogs/4") ? "32px" : "22px",
            }}
            className={classes.sidebar__items}
          >
            Andrew
          </NavLink>
          <NavLink
            to="/dialogs/5"
            alt="/#"
            style={{
              color: pathname.includes("dialogs/5") ? "red" : "grey",
              fontWeight: pathname.includes("dialogs/5") ? "700" : "300",
              fontSize: pathname.includes("dialogs/5") ? "32px" : "22px",
            }}
            className={classes.sidebar__items}
          >
            Andrew
          </NavLink>
          <NavLink
            to="/dialogs/6"
            alt="/#"
            style={{
              color: pathname.includes("dialogs/6") ? "red" : "grey",
              fontWeight: pathname.includes("dialogs/6") ? "700" : "300",
              fontSize: pathname.includes("dialogs/6") ? "32px" : "22px",
            }}
            className={classes.sidebar__items}
          >
            Andrew
          </NavLink>
          <NavLink
            to="/dialogs/7"
            alt="/#"
            style={{
              color: pathname.includes("dialogs/7") ? "red" : "grey",
              fontWeight: pathname.includes("dialogs/7") ? "700" : "300",
              fontSize: pathname.includes("dialogs/7") ? "32px" : "22px",
            }}
            className={classes.sidebar__items}
          >
            Andrew
          </NavLink>
          <NavLink
            to="/dialogs/8"
            alt="/#"
            style={{
              color: pathname.includes("dialogs/8") ? "red" : "grey",
              fontWeight: pathname.includes("dialogs/8") ? "700" : "300",
              fontSize: pathname.includes("dialogs/8") ? "32px" : "22px",
            }}
            className={classes.sidebar__items}
          >
            Andrew
          </NavLink>
          <NavLink
            to="/dialogs/9"
            alt="/#"
            style={{
              color: pathname.includes("dialogs/9") ? "red" : "grey",
              fontWeight: pathname.includes("dialogs/9") ? "700" : "300",
              fontSize: pathname.includes("dialogs/9") ? "32px" : "22px",
            }}
            className={classes.sidebar__items}
          >
            Andrew
          </NavLink>
          <NavLink
            to="/dialogs/12"
            alt="/#"
            style={{
              color: pathname.includes("dialogs/12") ? "red" : "grey",
              fontWeight: pathname.includes("dialogs/12") ? "700" : "300",
              fontSize: pathname.includes("dialogs/12") ? "32px" : "22px",
            }}
            className={classes.sidebar__items}
          >
            sasha
          </NavLink>
        </div>
        <div className={classes.Barrier}></div>
        <div className={`${classes.SideBar} ${classes.RightWrapper}`}>
          <div className={`${classes.rightwrapper__items} ${classes.friend}`}>
            <div className={classes.user__info}>
              <div className={classes.user__picture}></div>
              <div className={classes.user__name}>
                <p>Andrey</p>
              </div>
            </div>
            <div className={classes.user__message}>
              <p>im your Friends</p>
            </div>
          </div>
          <div className={`${classes.rightwrapper__items} ${classes.user}`}>
            <div className={classes.user__info}>
              <div className={classes.user__picture}></div>
              <div className={classes.user__name}>
                <p>Me</p>
              </div>
            </div>
            <div className={`${classes.user__message} ${classes.me}`}>
              <textarea name="" id="" cols="20" rows="10"></textarea>
            </div>
          </div>
          <div className={`${classes.rightwrapper__items} ${classes.friend}`}>
            <div className={classes.user__info}>
              <div className={classes.user__picture}></div>
              <div className={classes.user__name}>
                <p>Andrey</p>
              </div>
            </div>
            <div className={classes.user__message}>
              <p>im your Friends</p>
            </div>
          </div>
          <div className={`${classes.rightwrapper__items} ${classes.user}`}>
            <div className={classes.user__info}>
              <div className={classes.user__picture}></div>
              <div className={classes.user__name}>
                <p>Me</p>
              </div>
            </div>
            <div className={`${classes.user__message} ${classes.me}`}>
              <textarea name="" id="" cols="20" rows="10"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
