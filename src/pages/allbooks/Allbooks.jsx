/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import Books from "./Books";
import { useParams } from "react-router-dom";
import banLogo from "../../assets/images/bookninLogo.png";

const Allbooks = () => {
  const axiosInstance = useAxios();
  const { category } = useParams();
  const [sortedBooks, setSortedBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
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
  } = useQuery({
    queryKey: ["booksData"],
    queryFn: getBooks,
  });

  const handleSortByQuantity = () => {
    const sortedData = [...booksData.data];
    sortedData.sort((a, b) => b.quantity - a.quantity);

    setSortedBooks(sortedData);

    // Filter books with quantity > 0
    const filteredData = sortedData.filter((book) => book.quantity > 0);
    setFilteredBooks(filteredData);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Use filteredBooks when available, otherwise use booksData
  const displayData = filteredBooks.length > 0 ? filteredBooks : booksData.data;

  return (
    <div>
      <div className="flex justify-center items-center">
        <img width={"300px"} className="p-5" src={banLogo} alt="" />
        <button
          onClick={handleSortByQuantity}
          className="btn btn-primary dark:bg-sky-200 border-none bg-[#47B8C1] hover:bg-sky-800 dark:hover:bg-sky-900 dark:text-sky-950 dark:hover:text-sky-200 text-sky-950 hover:text-sky-200"
        >
          Sort by Quantity (High to Low)
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {displayData?.map((dd) => (
          <Books key={dd._id} bookData={dd} categoryName={category}></Books>
        ))}
      </div>
    </div>
  );
};

export default Allbooks;
