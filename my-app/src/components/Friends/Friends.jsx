import React from "react";
import classes from "./friends.module.css";
// import FriendsElements from "../Friends/friends-sub-component";
import Classcomponentusers from "./friend-class-component";

const Friends = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.descriptionTitle}>
        <p>Users</p>
      </div>
      <div className={classes.ContainerMessages}>
        {/* <FriendsElements /> */}
        <Classcomponentusers />
      </div>
    </div>
  );
};
export default Friends;
