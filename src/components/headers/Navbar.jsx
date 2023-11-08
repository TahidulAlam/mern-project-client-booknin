/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";

import Switcher from "./Switcher";
import "./Navbar.css";
import LogoImg from "./LogoImg";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const logowidth = "130px";
  const { user, signInOut } = useAuth();
  const navLink = (
    <>
      <li className="hidden lg:block">
        <NavLink to="/">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Home</span>
          )}
        </NavLink>
      </li>
      <li className="hidden lg:block">
        <NavLink to="/addBook">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Add Book</span>
          )}
        </NavLink>
      </li>
      <li className="hidden lg:block">
        <NavLink to="/allBooks">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>All Books</span>
          )}
        </NavLink>
      </li>
      <li className="hidden lg:block">
        <NavLink to="/borrowedBooks">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Borrowed Books</span>
          )}
        </NavLink>
      </li>
      <li className="hidden lg:block">
        {user && user?.email ? (
          " "
        ) : (
          <NavLink to="/login">
            {({ isActive, isPending, isTransitioning }) => (
              <span className={isActive ? "active" : ""}>login</span>
            )}
          </NavLink>
        )}
      </li>
      <div className="hover:bg-transparent flex justify-center items-center gap-4">
        <div>
          {user && user?.email ? (
            <div className="dropdown dropdown-end hover:none">
              <label
                tabIndex={0}
                className="btn btn-xs hover:bg-transparent hover:border-none bg-transparent border-none"
              >
                <div className="avatar">
                  <div className="w-7 rounded-full ring ring-sky-950 dark:ring-sky-200 ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-50 block menu p-2 shadow bg-base-100 rounded-box w-52 dark:bg-sky-800 dark:text-white"
              >
                <li className="">
                  <h1>{user?.displayName}</h1>
                </li>
                <li className="">
                  <button onClick={signInOut}>Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            " "
          )}
        </div>
        <Switcher />
      </div>
    </>
  );
  return (
    <div>
      <div className=" navbar w-[90vw] py-3 mx-auto fixed top-0 left-0 right-0 z-20 dark:bg-sky-950 bg-sky-50">
        <div className="flex-none lg:hidden dark:text-sky-200 text-2xl">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <Link to={"/"}>
            <LogoImg width={logowidth}></LogoImg>
          </Link>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal flex items-center font-medium gap-2 dark:text-sky-50 hover:dark:text-sky-50">
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
