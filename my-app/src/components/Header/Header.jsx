import React from "react";
import raster from "../../assets/Raster.png";
import classes from "./header.module.css";

const Header = (props) => {
  const receivedData = props.data.map((receivedUnpackedData) => (
    <p>
      {receivedUnpackedData.message}
      {receivedUnpackedData.age}
      {receivedUnpackedData.name}
    </p>
  ));
  return (
    <div className={classes.header}>
      {receivedData}
      <div className={classes.headerImage}>
        <img src={raster} alt="/#"></img>
        <p></p>
      </div>
    </div>
  );
};
export default Header;
