import { NavLink } from "react-router";
import user from "../assets/user.png";
const NavBar = () => {
  return (
    <div className="flex mt-4 justify-between">
      <div></div>
      <div className="nav flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-5">
        <img src={user} alt="" />
        <button className="btn btn-primary px-5">login</button>
      </div>
    </div>
  );
};

export default NavBar;
