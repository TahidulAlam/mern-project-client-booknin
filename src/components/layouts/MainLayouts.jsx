/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../headers/Sidebar";
import Navbar from "../headers/Navbar";
import Footer from "../footers/Footer";

const MainLayouts = ({ children }) => {
  return (
    <div>
      <div className="drawer max-w-full mx-auto bg-sky-50 dark:bg-sky-950 font-poppins">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col w-[90vw] mx-auto">
          <Navbar></Navbar>
          <div className="mt-16">{children}</div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full dark:bg-sky-950 dark:text-sky-200 bg-sky-50 z-50">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayouts;
