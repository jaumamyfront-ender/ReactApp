import React from "react";
import classes from "./messages.module.css";
const Messages = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.descriptionTitle}>
        <p>Users</p>
      </div>
      <div className={classes.ContainerMessages}>
        {" "}
        <div className={classes.BlockDialogsWrapper}>
          {" "}
          <div className={classes.followUsers}>
            <div className={classes.followUserImage}></div>
            <div className={classes.followUserButton}>
              <button>Follow</button>
            </div>
          </div>
          <div className={classes.UserComments}>
            <div className={classes.comment__area}>
              <p>text text text text</p>
            </div>
            <div className={classes.info__container}>
              <div className={classes.info__card}></div>
              <div className={classes.info__about__User}></div>
            </div>
          </div>
        </div>
        <div className={classes.BlockDialogsWrapper}>
          {" "}
          <div className={classes.followUsers}>
            <div className={classes.followUserImage}></div>
            <div className={classes.followUserButton}>
              <button>Follow</button>
            </div>
          </div>
          <div className={classes.UserComments}>
            <div className={classes.comment__area}>
              <p>text text text text</p>
            </div>
            <div className={classes.info__container}>
              <div className={classes.info__card}></div>
              <div className={classes.info__about__User}></div>
            </div>
          </div>
        </div>
        <div className={classes.BlockDialogsWrapper}>
          {" "}
          <div className={classes.followUsers}>
            <div className={classes.followUserImage}></div>
            <div className={classes.followUserButton}>
              <button>Follow</button>
            </div>
          </div>
          <div className={classes.UserComments}>
            <div className={classes.comment__area}>
              <p>text text text text</p>
            </div>
            <div className={classes.info__container}>
              <div className={classes.info__card}></div>
              <div className={classes.info__about__User}></div>
            </div>
          </div>
        </div>
        <div className={classes.BlockDialogsWrapper}>
          {" "}
          <div className={classes.followUsers}>
            <div className={classes.followUserImage}></div>
            <div className={classes.followUserButton}>
              <button>Follow</button>
            </div>
          </div>
          <div className={classes.UserComments}>
            <div className={classes.comment__area}>
              <p>text text text text</p>
            </div>
            <div className={classes.info__container}>
              <div className={classes.info__card}></div>
              <div className={classes.info__about__User}></div>
            </div>
          </div>
        </div>
        <div className={classes.BlockDialogsWrapper}>
          {" "}
          <div className={classes.followUsers}>
            <div className={classes.followUserImage}></div>
            <div className={classes.followUserButton}>
              <button>Follow</button>
            </div>
          </div>
          <div className={classes.UserComments}>
            <div className={classes.comment__area}>
              <p>text text text text</p>
            </div>
            <div className={classes.info__container}>
              <div className={classes.info__card}></div>
              <div className={classes.info__about__User}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Messages;
