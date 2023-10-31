import React from "react";
import raster from "../../assets/Raster.png";
import classes from "./header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.headerImage}>
        <img src={raster} alt="/#"></img>
      </div>
    </div>
  );
};
export default Header;
