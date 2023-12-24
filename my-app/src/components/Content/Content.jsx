import React from "react";
import profile from "../../assets/profile.jpeg";
import profileImage from "../../assets/profileImage.jpg";
import ContentFooter from "./sub-componentsContentFooter";
import {
  ActionCreatorAdd,
  ActionCreatorUpdate,
} from "../Redux/reducer-content";
import { useDispatch, useSelector } from "react-redux";

const Content = () => {
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
  debugger;
  return (
    <div className="content">
      <div className="content__preview">
        <img src={profile} alt="/#" />
      </div>
      <div className="content__profile">
        <div className="profile__image">
          <img src={profileImage} alt="/#" />{" "}
        </div>
        <div className="profile__description">
          <p>Dmitry K.</p>
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

export default Content;
