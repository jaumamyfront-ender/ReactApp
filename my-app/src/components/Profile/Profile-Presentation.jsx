import React from "react";
import profile from "../../assets/profile.jpeg";
import profileImage from "../../assets/profileImage.jpg";
import Logic from "./some-logic/util.logic";
import { useSelector } from "react-redux";
import ProfileReduxForm from "./Profile-Form";
import classes from "./profile.module.css";

const Profile = (props) => {
  let { addPost } = Logic();

  return (
    <div className={classes.content}>
      <div className={classes.content__preview}>
        <img src={profile} alt="/#" />
      </div>
      <div className={classes.content__profile}>
        <div className={classes.profile__image}>
          <img src={props.profile.photos.large} alt={profileImage} />
        </div>
        <div className={classes.profile__description}>
          <p>{props.profile.fullName}</p>
          <p>aboutMe- {props.profile.aboutMe} </p>
          <p>looking for a job- {props.profile.lookingForAJobDescription}</p>
          {props.UserStatus}
        </div>
      </div>
      <div className={classes.content__posts}>
        <div className={classes.my__posts}>
          <p>My Post</p>
        </div>
        <ProfileReduxForm save={addPost} />
      </div>
      <ContentFooter />
    </div>
  );
};
const ContentFooter = (props) => {
  const dataFromReduxProfile = useSelector(
    (state) => state.Profile.AddProfilePost
  );
  const receivedData = dataFromReduxProfile.map((receivedUnpackedData) => (
    <PostItems mycomment={receivedUnpackedData.message} />
  ));

  return <div>{receivedData}</div>;
};
const PostItems = (props) => {
  return (
    <div className={classes.content__footer}>
      <div className={classes.item__one}>
        <div className={classes.item__one__image}>
          {/* <img src="" alt="/#" /> */}
        </div>
        <div className={classes.item__one__comment}>
          <span>{props.mycomment}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
