import classes from "./friends.module.css";
import UserUndefined from "../../assets/userUndefined.png";
import React from "react";

export default function UsersPresentationComponent(props) {
  let PagesCount = Math.ceil(props.count / props.pages);
  let pages = [];
  let i = 1;
  for (i = 1; i <= PagesCount; i++) {
    pages.push(i);
  }
  console.log(props.users);
  return props.users.map((u) => (
    <div key={u.id} className={classes.BlockDialogsWrapper}>
      <div className={classes.PagesSize}>
        {pages.map((p) => {
          return (
            <span
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.current === p ? classes.selectedPage : ""}
            >
              {p}
            </span>
          );
        })}
      </div>
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
                props.follow(u.id);
              }}
            >
              Follow
            </button>
          ) : (
            <button
              onClick={() => {
                props.unfollow(u.id);
              }}
            >
              Unfollow
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
            <p>{"u.location.country"}</p>
            <p>{"u.location.city"}</p>
          </div>
        </div>
      </div>
    </div>
  ));
}
