import React from "react";
import classes from "./dialogs.module.css";

export default function Dialogs() {
  return (
    <div className="Wrapper">
      <div className={classes.Container}>
        <div className={classes.Head}></div>
        <div className={`${classes.SideBar} ${classes.Left}`}>
          <div className={`${classes.Item} ${classes.one}`}></div>
          <div className={`${classes.Item} ${classes.second}`}></div>
          <div className={`${classes.Item} ${classes.three}`}></div>
          <div className={`${classes.Item} ${classes.third}`}></div>
          <div className={`${classes.Item} ${classes.five}`}></div>
          <div className={`${classes.Item} ${classes.six}`}></div>
          <div className={`${classes.Item} ${classes.seven}`}></div>
          <div className={`${classes.Item} ${classes.eight}`}></div>
          <div className={`${classes.Item} ${classes.nine}`}></div>
          <div className={`${classes.Item} ${classes.teen}`}></div>
        </div>
        <div className={classes.Barrier}></div>
        <div className={`${classes.SideBar} ${classes.Right}`}></div>
      </div>
    </div>
  );
}
