import React from "react";
const ContentFooter = (props) => {
  const receivedData = props.userpost.map((receivedUnpackedData) => (
    <span>{receivedUnpackedData.message}</span>
  ));
  console.log(receivedData);

  return (
    <div className="content__footer">
      <div className="item__one">
        <div className="item__one__image">{/* <img src="" alt="/#" /> */}</div>
        <div className="item__one__comment">
          <span>{receivedData}</span>
        </div>
      </div>
      <div className="item__one">
        <div className="item__one__image">{/* <img src="" alt="/#" /> */}</div>
        <div className="item__one__comment">{receivedData}</div>
      </div>
    </div>
  );
};

export default ContentFooter;
