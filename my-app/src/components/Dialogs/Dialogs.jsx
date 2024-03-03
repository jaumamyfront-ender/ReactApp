import React from "react";
import classes from "./dialogs.module.css";
import UserMessage from "./UserMessage";
import DialogsLogic from "./some-logic-code/util.logic";
import DialogReduxForm from "./Form-Dialogs";

export default function Dialogs(props) {
  let {
    onSendMessageClick,
    dialogsdataelements,
  } = DialogsLogic();
  return (
    <div className="Wrapper">
      <div className={classes.Container}>
        <div className={classes.Head}>
          <p>Dialogs</p>
        </div>
        <div className={`${classes.SideBar} ${classes.LeftWrapper}`}>
          {dialogsdataelements}//return linkusers name left sidebar
        </div>
        <div className={classes.Barrier}> center </div>
        <div className={`${classes.SideBar} ${classes.RightWrapper}`}>
          <UserMessage />
          <div className={`${classes.rightwrapper__items} ${classes.user}`}>
            <div className={classes.user__info}>
              <div className={classes.user__picture}></div>
              <div className={classes.user__name}>
                <p>Meeeee</p>
              </div>
            </div>
            <div className={`${classes.user__message} ${classes.me}`}>
  <DialogReduxForm save={onSendMessageClick}/>
            </div>
    
          </div>
        </div>
      </div>
    </div>
  );
}


