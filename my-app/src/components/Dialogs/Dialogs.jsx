import React from "react";
import classes from "./dialogs.module.css";
import { NavLink, useLocation } from "react-router-dom";
// import UserMessage from "./UserMessage";

export default function Dialogs() {
  const { pathname } = useLocation();

  let dialogsdata = [
    { id: 1, name: "dimych" },
    { id: 2, name: "sveta" },
    { id: 3, name: "tanja" },
    { id: 4, name: "andrey" },
    { id: 5, name: "taras" },
    { id: 6, name: "bogdan" },
    { id: 7, name: "vera" },
    { id: 8, name: "lera" },
    { id: 9, name: "sergei" },
    { id: 0, name: "danil" },
  ];
  let dialogsdataelements = dialogsdata.map((dialog) => (
    <Dialogitems name={dialog.name} id={dialog.id} pathname={pathname} />
  ));
  let dialogsDataMessageUser = [
    {
      id: 0,
      message: "i am your friend,bro,what are you thinking about this",
      name: "dimon",
    },
    { id: 1, message: "yoooooooooooooooooooooo", name: "andrew" },
  ];
  let usermessagee = dialogsDataMessageUser.map((dialogggg) => (
    <UserMessage message={dialogggg.message} name={dialogggg.name} />
  ));

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
