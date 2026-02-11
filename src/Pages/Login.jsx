import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
  const { signInuser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInuser(email, password)
      .then((result) => navigate(location?.state || "/"))
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex justify-center min-h-250 items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login your account</h2>

          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="font-semibold text-center">
                Don't Have an Account ?{" "}
                <Link to="/auth/register" className="text-secondary">
                  Register
                </Link>
              </p>
              <p className="text-sm font-bold text-red-600">{error}</p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
