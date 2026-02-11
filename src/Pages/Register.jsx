import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { newUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    newUser(email, password)
      .then(() => {
        // console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex justify-center min-h-250 items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">
            Register an account
          </h2>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              {/* photo url */}
              <label className="label">Photo Url</label>
              <input
                name="photourl"
                type="text"
                className="input"
                placeholder="Photo Url"
              />

              {/* email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-semibold text-center">
                Already have an Account ?{" "}
                <Link to="/auth/Login" className="text-secondary">
                  Login
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

export default Register;
