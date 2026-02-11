import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogins = () => {
  return (
    <div>
      <h2 className="font-bold mb-4">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24}></FcGoogle>
          Login With Google
        </button>
        <button className="btn  btn-outline w-full">
          <FaGithub size={24}></FaGithub> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogins;
