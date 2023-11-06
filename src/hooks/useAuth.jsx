/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const providerInfo = useContext(AuthContext);
  return providerInfo;
};

export default useAuth;
