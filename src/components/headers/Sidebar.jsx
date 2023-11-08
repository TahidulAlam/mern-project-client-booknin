/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Sidebar = () => {
  const { user, signInOut } = useAuth();
  const navLink = (
    <>
      {/* <div className="hover:bg-transparent flex justify-center items-center gap-4">
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
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 dark:bg-sky-800 dark:text-white"
              >
                <li>
                  <h1>{user?.displayName}</h1>
                </li>
                <li>
                  <button onClick={signInOut}>Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            " "
          )}
        </div>
      </div> */}
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
    </>
  );
  return (
    <div>
      <ul className="flex flex-col mt-20 z-50 dark:bg-sky-950 dark:text-sky-200 gap-5">
        {navLink}
      </ul>
    </div>
  );
};

export default Sidebar;
