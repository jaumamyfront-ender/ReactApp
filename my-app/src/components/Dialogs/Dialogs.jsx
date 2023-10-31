import React from "react";
import classes from "./dialogs.module.css";
// import userImage from "../../assets/";
const Dialogs = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.descriptionTitle}>
        <p>Users</p>
      </div>
      <div className={classes.followUsers}>
        <div className={classes.followUserImage}></div>
        <div className={classes.followUserButton}>
          <button>Follow</button>
        </div>
      </div>
      <div className={classes.UserComments}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};
export default Dialogs;
