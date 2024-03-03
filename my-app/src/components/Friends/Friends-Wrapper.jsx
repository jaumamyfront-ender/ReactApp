import React from "react";
import classes from "./friends.module.css";
import PageCounter from "./some-logic/Page-Counter";
import Container from "./firends-container";

const Friends = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.descriptionTitle}>
        <p>Users</p>
      </div>
      <div className={classes.ContainerMessages}>
        <PageCounter />
        <Container />
      </div>
    </div>
  );
};
export default Friends;
