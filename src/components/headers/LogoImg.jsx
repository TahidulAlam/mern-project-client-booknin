/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/images/bookninLogo.png";

const LogoImg = ({ width }) => {
  return (
    <div>
      <img width={width} src={logo} alt="" />
    </div>
  );
};

export default LogoImg;
