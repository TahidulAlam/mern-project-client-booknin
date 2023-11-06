/* eslint-disable no-unused-vars */
// import Swal from "Sweetalert";
import { AiFillGoogleCircle } from "react-icons/ai";
// import { AiFillGithubCircle } from "react-icons/ai";
// import { BsGithub } from "react-icons/bs";
// import { BsGoogle } from "react-icons/bs";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

useAuth;
const SocialAuth = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  const handleSocialSignIn = (media) => {
    media()
      .then(() => {
        Swal.success("Sign In seccessfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => Swal.error("invalid input"));
  };

  return (
    <div>
      <div className=" flex justify-center items-center gap-3 p-5">
        {pathname === "/login" ? (
          <h1 className="dark:text-sky-50 text-sky-950 font-semibold">
            {" "}
            Sign in with{" "}
          </h1>
        ) : (
          <h1 className="dark:text-sky-50 text-sky-950 font-semibold">
            {" "}
            Sign up with{" "}
          </h1>
        )}

        <div className="flex justify-center items-center gap-3">
          <button
            className="rounded-full hover:bg-[#47B8C1] text-sky-950 dark:text-white  dark:hover:bg-[#47B8C1]"
            onClick={() => handleSocialSignIn(signInWithGoogle)}
          >
            <AiFillGoogleCircle className="text-5xl  rounded-full " />
          </button>
          <button
            className="rounded-full  hover:bg-[#47B8C1] hover:border-[#47B8C1] border-[#47B8C1] text-[#47B8C1] dark:text-white  dark:hover:bg-[#47B8C1]"
            //   onClick={() => handleSocialSignIn(signInWithGithub)}
          >
            {/* <AiFillGithubCircle className="text-5xl hover:bg-white rounded-full hover:text-sky-950" /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialAuth;
