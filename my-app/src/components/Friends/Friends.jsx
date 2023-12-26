import React from "react";
import classes from "./friends.module.css";
import { useSelector, useDispatch } from "react-redux";

const Friends = () => {
  const usedispatch = useDispatch;
  const uiDataFriend = useSelector((state) => state.Friends.users);
  const ReceivedData = uiDataFriend.map((u) => (
    <BlockFriends
      imageUser={u.photoUrl}
      country={u.location.country}
      city={u.location.city}
      name={u.fullName}
      comment={u.comment}
    />
  ));
  return (
    <div className={classes.wrapper}>
      <div className={classes.descriptionTitle}>
        <p>Users</p>
      </div>
      <div className={classes.ContainerMessages}>{ReceivedData}</div>
    </div>
  );
};
export default Friends;

const BlockFriends = (props) => {
  return (
    <div className={classes.BlockDialogsWrapper}>
      <div className={classes.followUsers}>
        <div className={classes.followUserImage}>
          <img src={props.imageUser} alt="/#" />
        </div>
        <div className={classes.followUserButton}>
          <button>{props.button}Follow</button>
        </div>
      </div>
      <div className={classes.UserComments}>
        <div className={classes.comment__area}>
          <p>{props.name}</p>
          <p>{props.comment}</p>
        </div>
        <div className={classes.info__container}>
          <div className={classes.info__card}>
            <p>{props.country}</p>
            <p>{props.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
