import React from "react";
import classes from "./dialogs.module.css";
import { useSelector } from "react-redux";

let UserMessageBox = (props) => {
  const dataFromReduxUserMessage = useSelector(
    (state) => state.MessagesPage.dialogsDataUsersMessage
  );
  let newbox = dataFromReduxUserMessage.map((dialogggg) => (
    <Userbox object={dialogggg.messages} />
  ));
  return <div>{newbox}</div>;
};

let Userbox = (props) => {
  return (
    <div className={`${classes.rightwrapper__items} ${classes.friend}`}>
      <div className={classes.user__info}>
        <div className={classes.user__picture}></div>
        <div className={classes.user__name}>
          <p>userprofilenamemessage</p>
        </div>
      </div>
      <div className={classes.user__message}>
        <p>{props.object}</p>
      </div>
    </div>
  );
};
export default UserMessageBox;
