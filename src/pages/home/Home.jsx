/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import Banner from "./banner/Banner";
import Category from "./category/Category";
import About from "./about/About";

const Home = () => {
  const { username, value } = useAuth();
  console.log(username, value);
  return (
    <div>
      <div className="pt-10">
        <Banner></Banner>
      </div>
      <div className="">
        <h1 className="text-center text-3xl font-bold dark:text-white text-sky-950 py-10">
          Category
        </h1>
        <Category></Category>
      </div>
      <div className="pt-10">
        <About></About>
      </div>
    </div>
  );
};

export default Home;
