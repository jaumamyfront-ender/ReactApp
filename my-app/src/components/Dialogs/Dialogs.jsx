import React from "react";
import classes from "./dialogs.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Dialogs() {
  const { pathname } = useLocation();
  const Dialogitems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
      <NavLink
        to={path}
        alt="/#"
        style={{
          color: pathname.includes(path) ? "red" : "grey",
          fontWeight: pathname.includes(path) ? "700" : "300",
          fontSize: pathname.includes(path) ? "32px" : "22px",
        }}
        className={classes.sidebar__items}
      >
        Andrew
      </NavLink>
    );
  };

  return (
    <div className="Wrapper">
      <div className={classes.Container}>
        <div className={classes.Head}>
          <p>Dialogs</p>
        </div>
        <div className={`${classes.SideBar} ${classes.LeftWrapper}`}>
          <Dialogitems name="dima" id="1" />
          <Dialogitems name="sasha" id="2" />
          <Dialogitems name="ola" id="3" />
          <Dialogitems name="sveta" id="4" />
          <Dialogitems name="andrey" id="5" />
          <Dialogitems name="dalbaeb" id="6" />
          <Dialogitems name="huesos" id="7" />
          <Dialogitems name="idiot" id="8" />
          <Dialogitems name="srakoliz" id="9" />
          <Dialogitems name="debil" id="0" />
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
