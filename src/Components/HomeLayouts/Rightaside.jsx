import React from "react";
import SocialLogins from "../SocialLogins";
import Findus from "../Findus";
import Qzone from "../Qzone";
import img from "../../assets/bg.png";
const Rightaside = () => {
  return (
    <div>
      <SocialLogins></SocialLogins>
      <Findus></Findus>
      <Qzone></Qzone>
      <img src={img} alt="" />
    </div>
  );
};

export default Rightaside;
