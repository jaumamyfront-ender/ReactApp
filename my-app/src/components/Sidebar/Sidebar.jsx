import React from "react";
import classes from "./sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__list}>
        <a href="content">Profile</a>
        <a href="messages">Messages</a>
        <a href="/#">News</a>
        <a href="/#">Music</a>
        <a href="/#">Settings</a>
      </div>
      <div className={classes.sidebar__friends}>
        <a href="/#" alt="/#" className={classes.qqq}>
          Friends
        </a>
        <div className={classes.userspictures}>
          <img></img>
        </div>
        <div className={classes.userspictures}>
          <img></img>
        </div>
        <div className={classes.userspictures}>
          <img></img>
        </div>
        <div className={classes.users__name}>sdfsd</div>
        <div className={classes.users__name}>fdsfs</div>
        <div className={classes.users__name}>fdsfsd</div>
      </div>
    </div>
  );
};
export default Sidebar;
