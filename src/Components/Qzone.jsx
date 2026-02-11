import React from "react";
import classes from "../assets/class.png";
import swimming from "../assets/swimming.png";
import playground from "../assets/playground.png";
const Qzone = () => {
  return (
    <div className="mt-3 bg-base-200">
      <h2 className="font-bold">Q-zone</h2>
      <div>
        <img className="w-full p-15" src={playground} alt="" />
        <img className="w-full p-15" src={classes} alt="" />
        <img className="w-full p-15" src={swimming} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
