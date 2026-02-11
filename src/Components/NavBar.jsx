import { Link, NavLink } from "react-router";
import user1 from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
const NavBar = () => {
  const { user, userOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userOut();
  };
  return (
    <div className="flex mt-4 justify-between">
      <div></div>
      <div className="nav flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-5">
        <img src={user1} alt="" />

        {user ? (
          <button onClick={handleSignOut} className="btn btn-primary px-5">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
