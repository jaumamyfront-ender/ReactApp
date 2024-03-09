import React from "react";

const Textarea = ({ meta, input, ...props }) => {
  return (
    <div> 
      <textarea
        name=""
        id=""
        cols="20"
        rows="60"
        {...input}
        {...props}
      ></textarea>
    </div>
  );
};
export default Textarea;
