import React from "react";
import classes from "./friends.module.css";

import Container from "./firends-container";

const Friends = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.descriptionTitle}>
        <p>Users</p>
      </div>
      <div className={classes.ContainerMessages}>
        <Container />
      </div>
    </div>
  );
};
export default Friends;
