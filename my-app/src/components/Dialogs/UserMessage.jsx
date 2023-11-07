import React from "react";
import classes from "./dialogs.module.css";

const UserMessage = (props) => {
  let dialogsDataMessageUser = [
    { id: 0, message: "i am your friend,bro,what are you thinking about this" },
    { id: 1, message: "yoooooooooooooooooooooo" },
  ];
  let usermessagee = dialogsDataMessageUser.map((dialogggg) => (
    <UserMessage message={dialogggg.message} />
  ));
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
export default UserMessage;
