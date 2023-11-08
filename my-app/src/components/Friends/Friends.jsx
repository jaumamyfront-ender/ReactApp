import React from "react";
import classes from "./friends.module.css";
const Friends = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.descriptionTitle}>
        <p>Users</p>
      </div>
      <div className={classes.ContainerMessages}>
        <BlockFriends />
        <BlockFriends />
        <BlockFriends />
        <BlockFriends />
      </div>
    </div>
  );
};
export default Friends;
const BlockFriends = (props) => {
  return (
    <div className={classes.BlockDialogsWrapper}>
      <div className={classes.followUsers}>
        <div className={classes.followUserImage}>
          {/* <img src={props.imageUser} alt="/#" /> */}
        </div>
        <div className={classes.followUserButton}>
          <button>{props.button}Follow</button>
        </div>
      </div>
      <div className={classes.UserComments}>
        <div className={classes.comment__area}>
          <p>{props.comment}</p>
        </div>
        <div className={classes.info__container}>
          <div className={classes.info__card}>
            <p>{props.countryUser}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
