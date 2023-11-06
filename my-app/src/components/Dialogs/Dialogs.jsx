import React from "react";
import classes from "./dialogs.module.css";
import { NavLink, useLocation } from "react-router-dom";
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
let dialogsDataMessageUser = [
  { id: 0, message: "i am your friend,bro,what are you thinking about this" },
  { id: 1, message: "yoooooooooooooooooooooo" },
];
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
            <p>Andrey</p>
          </div>
        </div>
        <div className={classes.user__message}>
          <p>{props.message}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="Wrapper">
      <div className={classes.Container}>
        <div className={classes.Head}>
          <p>Dialogs</p>
        </div>
        <div className={`${classes.SideBar} ${classes.LeftWrapper}`}>
          <Dialogitems name={dialogsdata[0].name} id={dialogsdata[0].id} />
          <Dialogitems name={dialogsdata[1].name} id={dialogsdata[1].id} />
          <Dialogitems name={dialogsdata[2].name} id={dialogsdata[2].id} />
          <Dialogitems name={dialogsdata[3].name} id={dialogsdata[3].id} />
          <Dialogitems name={dialogsdata[4].name} id={dialogsdata[4].id} />
          <Dialogitems name={dialogsdata[5].name} id={dialogsdata[5].id} />
          <Dialogitems name={dialogsdata[6].name} id={dialogsdata[6].id} />
          <Dialogitems name={dialogsdata[7].name} id={dialogsdata[7].id} />
          <Dialogitems name={dialogsdata[8].name} id={dialogsdata[8].id} />
          <Dialogitems name={dialogsdata[9].name} id={dialogsdata[9].id} />
        </div>
        <div className={classes.Barrier}></div>
        <div className={`${classes.SideBar} ${classes.RightWrapper}`}>
          <UserMessage
            message={dialogsDataMessageUser[0].message}
            id={dialogsDataMessageUser[0].id}
          />
          <UserMessage
            message={dialogsDataMessageUser[1].message}
            id={dialogsDataMessageUser[1].id}
          />
          <UserMessage
            message={dialogsDataMessageUser[0].message}
            id={dialogsDataMessageUser[0].id}
          />

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
