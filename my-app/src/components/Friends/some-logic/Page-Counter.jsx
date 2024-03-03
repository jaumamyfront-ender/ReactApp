import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import classes from "../friends.module.css";
import { getUsersOnNewPageThunkCreator } from "./../../Redux/reducer-friends";

export default function PageCounter(props) {
  const takeNumberCount = useSelector((state) => ({
    Pages: state.Friends.PagesSize,
    Count: state.Friends.TotalCount,
    Current: state.Friends.CurrentPage,
  }));
  const dispatch = useDispatch();

  let onPageChanged = (value) => {
    dispatch(getUsersOnNewPageThunkCreator(value));
  };

  let PagesCount = Math.ceil(takeNumberCount.Count / takeNumberCount.Pages);
  let pages = [];
  let i = 1;
  for (i = 1; i <= PagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.PagesSize}>
      {pages.map((p) => {
        return (
          <span
            onClick={(e) => {
              onPageChanged(p);
            }}
            className={
              takeNumberCount.Current === p ? classes.selectedPage : ""
            }
          >
            {p}
          </span>
        );
      })}
    </div>
  );
}

