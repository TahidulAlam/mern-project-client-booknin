/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";

import Switcher from "./Switcher";
import "./Navbar.css";
import LogoImg from "./LogoImg";
const Navbar = () => {
  const logowidth = "130px";
  const navLink = (
    <>
      <li>
        <NavLink to="/">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Home</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/addBook">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Add Book</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/allBooks">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>All Books</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/borrowedBooks">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>Borrowed Books</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">
          {({ isActive, isPending, isTransitioning }) => (
            <span className={isActive ? "active" : ""}>login</span>
          )}
        </NavLink>
      </li>
      <div className="hover:bg-transparent">
        <Switcher />
      </div>
    </>
  );
  return (
    <div>
      <div className=" navbar w-[90vw] mx-auto fixed top-0 left-0 right-0 z-20 dark:bg-sky-950 bg-sky-50">
        <div className="flex-none lg:hidden ">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
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
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal flex items-center font-medium gap-2 dark:text-sky-50 hover:dark:text-sky-50">
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
