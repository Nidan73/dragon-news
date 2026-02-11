import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Findus = () => {
  return (
    <div className="mt-3">
      <h2 className="font-bold">Find Us</h2>
      <div className="space-y-3">
        <button className="btn w-full btn-outline join-item">
          <FaFacebook></FaFacebook>Facebook
        </button>
        <button className="btn w-full btn-outline join-item">
          <FaTwitter></FaTwitter>Twitter
        </button>
        <button className="btn w-full btn-outline join-item">
          <FaInstagram></FaInstagram>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default Findus;
