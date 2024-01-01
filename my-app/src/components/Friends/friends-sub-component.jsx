import React from "react";
import classes from "./friends.module.css";
import { useSelector, useDispatch } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../Redux/reducer-friends";
import axios from "axios";
import UserUndefined from "../../assets/userUndefined.png";

const FriendsElements = () => {
  const dispatch = useDispatch();

  let unfollow = (userID) => {
    console.log("Unfollow:", userID);
    dispatch(unfollowAC(userID));
  };
  let follow = (userID) => {
    console.log("Follow:", userID);

    dispatch(followAC(userID));
  };
  let getUsersfromLocal = useSelector((state) => state.Friends.users);
  console.log(getUsersfromLocal);
  let PushUsersFromServer = (getUsersfromLocal) => {
    if (getUsersfromLocal.length === 0) {
      console.log("no response and data");
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((Response) => {
          dispatch(setUsersAC(Response.data.items));
          console.log(Response.data);
        });
    }
  };
  PushUsersFromServer(getUsersfromLocal);

  const getSomeManyUsers = useSelector((state) => state.Friends.users);
  return getSomeManyUsers.map((u) => (
    <div key={u.id} className={classes.BlockDialogsWrapper}>
      <div className={classes.followUsers}>
        <div className={classes.followUserImage}>
          <img
            src={u.photoUrl != null ? u.photos.small : UserUndefined}
            alt="/#"
          />
        </div>
        <div className={classes.followUserButton}>
          {u.followed ? (
            <button
              onClick={() => {
                follow(u.id);
              }}
            >
              follow
            </button>
          ) : (
            <button
              onClick={() => {
                unfollow(u.id);
              }}
            >
              unfollow
            </button>
          )}
        </div>
      </div>
      <div className={classes.UserComments}>
        <div className={classes.comment__area}>
          <p>{u.fullName}</p>
          <p>{u.comment}</p>
        </div>
        <div className={classes.info__container}>
          <div className={classes.info__card}>
            <p>{"u.location.country"}</p>
            <p>{"u.location.city"}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};
export default FriendsElements;
