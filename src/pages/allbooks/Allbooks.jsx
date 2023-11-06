/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../hooks/useAxios";
import Books from "./Books";
import { useParams } from "react-router-dom";

const Allbooks = () => {
  const axiosInstance = useAxios();
  const { category } = useParams();
  const getBooks = async () => {
    try {
      if (category) {
        const url = `/api/bn/allbooks?category=${category}`;
        const res = await axiosInstance.get(url);
        return res;
      } else {
        const url = "/api/bn/allbooks";
        const res = await axiosInstance.get(url);
        return res;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const {
    data: booksData,
    isLoading,
    error,
    isPending,
  } = useQuery({
    queryKey: ["booksData"],
    queryFn: getBooks,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(booksData);
  return (
    <div>
      <h1>This is all book page</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {booksData.data?.map((dd) => (
          <Books key={dd._id} bookData={dd}></Books>
        ))}
      </div>
    </div>
  );
};

export default Allbooks;
