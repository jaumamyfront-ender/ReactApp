import React from "react";
const ContentFooter = (props) => {
  const receivedData = props.userpost.map((receivedUnpackedData) => (
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
