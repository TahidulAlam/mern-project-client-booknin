/* eslint-disable no-unused-vars */
import React from "react";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

const Category = () => {
  const axiosInstance = useAxios();
  const getBooks = async () => {
    try {
      const res = await axiosInstance.get("/api/bn/category");
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const {
    data: categoryData,
    isLoading,
    error,
    isPending,
  } = useQuery({
    queryKey: ["categoryData"],
    queryFn: getBooks,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {categoryData.data?.map((dd) => (
          <CategoryCard key={dd._id} categorydata={dd}></CategoryCard>
        ))}
      </div>
      <div className="text-center p-5">
        <Link to={"/allbooks"}>
          <button className="btn btn-primary dark:bg-sky-200 border-none bg-[#47B8C1] hover:bg-sky-800 dark:hover:bg-sky-900 dark:text-sky-950 dark:hover:text-sky-200 text-sky-950 hover:text-sky-200">
            See All books
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
