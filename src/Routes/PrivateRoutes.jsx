import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
