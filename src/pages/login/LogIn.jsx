/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import { alert } from "react-hot-alert";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { isValidEmail } from "../../components/socialAuth/validation";
import Swal from "sweetalert2";
import SocialAuth from "../../components/socialAuth/SocialAuth";
import imgLogIn from "../../assets/images/bookninLogo.png";
// import useAuth from "../../hooks/useAuth";

const Login = () => {
  // const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (isValidEmail(email)) {
      Swal("valid");
      // signIn(email, password)
      //   .then(() => {
      //     Swal("Sign In seccessfully", "success");
      //     navigate(location.state ? location.state : "/");
      //   })
      //   .catch((err) => Swal("invalid input", "error"));
    } else {
      return Swal("invalid input", "error");
    }
  };
  return (
    <div>
      <div
        className="relative lg:grid lg:grid-cols-2 min-h-screen
      overflow-hidden"
      >
        <div className="hidden lg:flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img src={imgLogIn} alt="" />
            <h1 className="font-semibold text-3xl text-center p-10 dark:text-white">
              "Booknin Library: Where Every Page Tells a Story"
            </h1>
          </div>
        </div>
        <div className="w-full p-6 m-auto lg:max-w-xl">
          <SocialAuth></SocialAuth>
          <div className="flex justify-center items-center gap-4">
            <hr className="w-2/6 border" />
            <h1 className="dark:text-white text-lg">or</h1>{" "}
            <hr className="w-2/6 border" />
          </div>
          <form className="mt-6" onSubmit={handleSignIn}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gary-700 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40 "
                placeholder="Enter your Email"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800 dark:text-white"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-gary-700 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                >
                  {showPassword ? (
                    <AiFillEyeInvisible className="text-gray-500" />
                  ) : (
                    <AiFillEye className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide dark:text-black text-white transition-colors duration-200 transform bg-[#47B8C1] dark:bg-[#47B8C1] dark:hover:bg-slate-100 rounded-md hover:bg-[#3da1a9]  focus:outline-none focus:bg-gray-600 dark:focus:bg-white">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700 dark:text-white">
            Don't have an account?{" "}
            <Link
              to={"/registration"}
              className="font-medium text-gray-700 dark:text-white hover:underline"
            >
              Sign up{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
