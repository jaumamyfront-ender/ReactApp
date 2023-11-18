import React from "react";
import classes from "./dialogs.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Dialogs(props) {
  const { pathname } = useLocation();
  //left side (users list)
  let dialogsdataelements = props.data.map((dialog) => (
    <Dialogitems name={dialog.name} id={dialog.id} pathname={pathname} />
  ));
  //get the users friendsmessage from Bll(user message)
  let usermessagee = props.messages.map((dialogggg) => (
    <UserMessage message={dialogggg.message} name={dialogggg.name} />
  ));
  //all site
  return (
    <div className="Wrapper">
      <div className={classes.Container}>
        <div className={classes.Head}>
          <p>Dialogs</p>
        </div>
        <div className={`${classes.SideBar} ${classes.LeftWrapper}`}>
          {dialogsdataelements}
        </div>
        <div className={classes.Barrier}></div>
        <div className={`${classes.SideBar} ${classes.RightWrapper}`}>
          {usermessagee}
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
//return links users and color onchange
const Dialogitems = (props) => {
  let path = "/dialogs/" + props.id;
  let isSelectPath = props.pathname.includes(path);
  return (
    <NavLink
      to={path}
      alt="/#"
      style={{
        color: isSelectPath ? "red" : "grey",
        fontWeight: isSelectPath ? "700" : "300",
        fontSize: isSelectPath ? "32px" : "22px",
      }}
      className={classes.sidebar__items}
    >
      {props.name}
    </NavLink>
  );
};
//return block of users message history
const UserMessage = (props) => {
  return (
    <div className={`${classes.rightwrapper__items} ${classes.friend}`}>
      <div className={classes.user__info}>
        <div className={classes.user__picture}></div>

        <div className={classes.user__name}>
          <p>{props.name}</p>
        </div>
      </div>

      <div className={classes.user__message}>
        <p>{props.message}</p>
      </div>
    </div>
  );
};
