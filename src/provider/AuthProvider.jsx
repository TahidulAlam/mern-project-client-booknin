/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import auth from "../utils/config/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAxios from "../hooks/useAxios";
export const AuthContext = createContext();

// auth
const AuthProvider = ({ children }) => {
  const axiosInstance = useAxios();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signInOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   setUser(user);
    //   setLoading(false);
    // });
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      console.log("newUser", loggedUser);
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
      if (currentUser) {
        axiosInstance.post("/jwt", loggedUser).then((res) => {
          console.log("token response", res.data);
        });
      } else {
        axiosInstance.post("/signInOut", loggedUser).then((res) => {
          console.log(res.data);
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [axiosInstance, user?.email]);
  const providerInfo = {
    createUser,
    signIn,
    signInOut,
    signInWithGoogle,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={providerInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
