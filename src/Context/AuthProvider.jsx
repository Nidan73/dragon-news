import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { useNavigate } from "react-router";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createdUser) => {
      console.log(createdUser);
      setUser(createdUser);
    });
    return unsubscribe;
  }, [auth]);

  const userOut = () => {
    return signOut(auth);
  };
  const newUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    newUser,
    signInuser,
    user,
    userOut,
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
