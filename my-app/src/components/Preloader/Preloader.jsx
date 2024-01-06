import React from "react";
import preloader from "../../assets/200w.gif";
import classes from "./preloaderStyle.module.css";

const Preloader = () => {
  return (
    <div className={classes.Container}>
      <img src={preloader} />
    </div>
  );
};
export default Preloader;
