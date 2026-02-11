import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-7">
      <img className="w-87.5" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-bold text-accent">
        {format(new Date(), ` EEEE , MMMM yyyy `)}
      </p>
    </div>
  );
};

export default Header;
