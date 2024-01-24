import classes from "./friends.module.css";
import UserUndefined from "../../assets/userUndefined.png";
import React from "react";
import { NavLink } from "react-router-dom";
import { getUserAC } from "../Redux/reducer-friends";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function UsersPresentationComponent(props) {
  let PagesCount = Math.ceil(props.count / props.pages);
  let pages = [];
  let i = 1;
  for (i = 1; i <= PagesCount; i++) {
    pages.push(i);
  }
  let dsp = useDispatch();
  let getfuckingid = (value) => {
    dsp(getUserAC(value));
  };
  console.log(props);
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
          <NavLink
            to={"/profile?"}
            onClick={() => {
              getfuckingid(u.id);
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
                props.isFetchingButton(true, u.id);
                axios
                  .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,

                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "f0f817fb-ae87-4732-8be4-12afaeaa4531",
                      },
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                    props.isFetchingButton(false, u.id);
                  });
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.ButtonDisabler.some((id) => id === u.id)}
              onClick={() => {
                props.isFetchingButton(true, u.id);

                props.DisabledFollow(u.id).then((response) => {
                  if (response.data.resultCode === 0) {
                    props.follow(u.id);
                  }
                  props.isFetchingButton(false, u.id);
                });
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
            <p>{"u.location.country"}</p>
            <p>{"u.location.city"}</p>
          </div>
        </div>
      </div>
    </div>
  ));
}
