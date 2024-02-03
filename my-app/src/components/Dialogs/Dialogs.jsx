import React from "react";
import classes from "./dialogs.module.css";
import { NavLink, useLocation } from "react-router-dom";
// import {
//   ActionCreatorAddMessage,
//   ActionCreatorReadMessage,
// } from "../Redux/reducer-dialogs";
import UserMessage from "./UserMessage";
// import { useSelector, useDispatch } from "react-redux";
import DialogsLogic from "./some-logic-code/Dialogs-SomeLogic-1";

export default function Dialogs(props) {
  let{
    dialogsdataelements,
      newValueFromStatetoTextArea,
      GetValueFromRef,
      onNewMessageChange,
      onSendMessageClick,
  } = DialogsLogic()
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
          <UserMessage />
          <div className={`${classes.rightwrapper__items} ${classes.user}`}>
            <div className={classes.user__info}>
              <div className={classes.user__picture}></div>
              <div className={classes.user__name}>
                <p>Me</p>
              </div>
            </div>
            <div className={`${classes.user__message} ${classes.me}`}>
              <textarea
                name=""
                id=""
                cols="20"
                rows="10"
                value={newValueFromStatetoTextArea}
                ref={GetValueFromRef}
                onChange={onNewMessageChange}
              ></textarea>
            </div>
            <button
              onClick={onSendMessageClick}
              className={classes.sendMessageFromUser}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


