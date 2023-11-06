/* eslint-disable no-unused-vars */
// const firebaseConfig = {
//   apiKey: "AIzaSyBU37W6EIKhTaPTRcPeW44uCRgs5iLHj6o",
//   authDomain: "booknin-project.firebaseapp.com",
//   projectId: "booknin-project",
//   storageBucket: "booknin-project.appspot.com",
//   messagingSenderId: "522703988723",
//   appId: "1:522703988723:web:eae27db940d74a4a965486",
// };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const all = import.meta.env;
const firebaseConfig = {
  apiKey: all.VITE_apiKey,
  authDomain: all.VITE_authDomain,
  projectId: all.VITE_projectId,
  storageBucket: all.VITE_storageBucket,
  messagingSenderId: all.VITE_messagingSenderId,
  appId: all.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
