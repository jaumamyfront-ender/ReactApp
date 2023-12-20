import React from "react";
import { useSelector } from "react-redux";
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

export default ContentFooter;
