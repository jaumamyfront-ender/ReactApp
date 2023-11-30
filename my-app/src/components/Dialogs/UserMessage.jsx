import React from "react";
import classes from "./dialogs.module.css";

export default function UserMessageBox(props) {
  let newbox = props.state.MessagesPage.dialogsDataUsersMessage.map(
    (dialogggg) => <Userbox object={dialogggg.messages} />
  );
  return <div>{newbox}</div>;
}
let Userbox = (props) => {
  return (
    <div className={`${classes.rightwrapper__items} ${classes.friend}`}>
      <div className={classes.user__info}>
        <div className={classes.user__picture}></div>

        <div className={classes.user__name}>
          <p></p>
        </div>
      </div>

      <div className={classes.user__message}>
        <p>{props.messages}</p>
      </div>
    </div>
  );
};
