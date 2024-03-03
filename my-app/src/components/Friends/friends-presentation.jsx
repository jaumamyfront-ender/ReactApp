import classes from "./friends.module.css";
import UserUndefined from "../../assets/userUndefined.png";
import React from "react";
import { NavLink } from "react-router-dom";
import useGetID from "./some-logic/GetID";

export default function UsersPresentationComponent(props) {
  const GetID = useGetID();
  console.log(props);

  return props.users.map((u) => (
    <div key={u.id} className={classes.BlockDialogsWrapper}>
      <div className={classes.followUsers}>
        <div className={classes.followUserImage}>
          <NavLink
            to={"/profile?"}
            onClick={() => {
              GetID(u.id);
            }}
          >
            <img
              src={u.photoUrl != null ? u.photos.small : UserUndefined}
              alt="/#"
            />
          </NavLink>
        </div>
        <div className={classes.followUserButton}>
          {u.followed ? (
            <button
              disabled={props.ButtonDisabler.some((id) => id === u.id)}
              onClick={() => {
                props.DisabledUnfollow(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.ButtonDisabler.some((id) => id === u.id)}
              onClick={() => {
                props.DisabledFollow(u.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={classes.UserComments}>
        <div className={classes.comment__area}>
          <p>{u.name}</p>
          <p>{u.comment}</p>
        </div>
        <div className={classes.info__container}>
          <div className={classes.info__card}>
            <p>{"country"}</p>
            <p>{"city"}</p>
          </div>
        </div>
      </div>
    </div>
  ));
}
