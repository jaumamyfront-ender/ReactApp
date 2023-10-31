import React from "react";
const ContentFooter = (props) => {
  return (
    <div className="content__footer">
      <div className="item__one">
        <div className="item__one__image">{/* <img src="" alt="/#" /> */}</div>
        <div className="item__one__comment">
          <span>{props.age}</span>
        </div>
      </div>
      <div className="item__one">
        <div className="item__one__image">{/* <img src="" alt="/#" /> */}</div>
        <div className="item__one__comment">
          <span>{props.message}</span>
        </div>
      </div>
    </div>
  );
};
export default ContentFooter;
