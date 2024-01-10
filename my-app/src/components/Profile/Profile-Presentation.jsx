import React from "react";
import profile from "../../assets/profile.jpeg";
import profileImage from "../../assets/profileImage.jpg";
import {
  ActionCreatorAdd,
  ActionCreatorUpdate,
} from "../Redux/reducer-content";
import { useDispatch, useSelector } from "react-redux";

const Profile = (props) => {
  let GetValueFromRef = React.createRef();
  const dispatch = useDispatch();
  const TextAreaValueContent = useSelector(
    (state) => state.Profile.NewPostText[0].message
  );
  let TextAreaNewValuefromState = TextAreaValueContent;

  let addPost = () => {
    let valueelement = GetValueFromRef.current.value;
    dispatch(ActionCreatorAdd(valueelement));
  };

  let onPostChange = () => {
    let valueelement = GetValueFromRef.current.value;
    dispatch(ActionCreatorUpdate(valueelement));
  };
  console.log(props);
  return (
    <div className="content">
      <div className="content__preview">
        <img src={profile} alt="/#" />
      </div>
      <div className="content__profile">
        <div className="profile__image">
          <img src={props.profile.photos.large} alt={profileImage} />
        </div>
        <div className="profile__description">
          <p>{props.profile.fullName}</p>
          <p>
            Date of Birth: 2 january City: Minsk Education: BSU '11 Web Site:
            https://samuraijs.com
          </p>
        </div>
      </div>
      <div className="content__posts">
        <div className="my__posts">
          <p>My Post</p>
        </div>
        <div className="my__poststextarea">
          <textarea
            name=""
            id=""
            cols="10"
            rows="5"
            value={TextAreaNewValuefromState}
            ref={GetValueFromRef}
            onChange={onPostChange}
          >
            .
          </textarea>
        </div>
        <div className="my__postssendbutton">
          <button onClick={addPost}>Send</button>
        </div>
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
    <div className="content__footer">
      <div className="item__one">
        <div className="item__one__image">{/* <img src="" alt="/#" /> */}</div>
        <div className="item__one__comment">
          <span>{props.mycomment}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
