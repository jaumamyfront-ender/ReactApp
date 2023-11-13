import React from "react";
import profile from "../../assets/profile.jpeg";
import profileImage from "../../assets/profileImage.jpg";
import ContentFooter from "./sub-componentsContentFooter";

const Content = (props) => {
  let GetValueFromRef = React.createRef();

  let addtext = () => {
    let valueelement = GetValueFromRef.current.value;
    props.addMessage(valueelement);
  };

  return (
    <div className="content">
      <div className="content__preview">
        <img src={profile} alt="/#" />
      </div>
      <div className="content__profile">
        <div className="profile__image">
          {" "}
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
          <p>My posts</p>
        </div>
        <div className="my__poststextarea">
          <textarea
            name="assasasa"
            id=""
            cols="10"
            rows="5"
            ref={GetValueFromRef}
          >
            your
          </textarea>
        </div>
        <div className="my__postssendbutton">
          <button onClick={addtext}>Send</button>
        </div>
      </div>
      <ContentFooter userpost={props.userPost} />
    </div>
  );
};
export default Content;
