import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router";
import Loading from "../Components/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
