/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { QueryClient, useQuery } from "@tanstack/react-query";
import BorrowedBooksCard from "./BorrowedBooksCard";

const BorrowedBooks = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  // const { id } = useParams();
  const getBook = async () => {
    try {
      const url = `/api/bn/borrowedBooks?email=${user?.email}`;
      const res = await axiosInstance.get(url);
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const {
    data: bookData,
    isLoading,
    error,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["bookData"],
    queryFn: getBook,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const books = Array.isArray(bookData.data) ? bookData.data : [];
  return (
    <div>
      <h1>Borrowed Books page</h1>
      <div className="grid grid-cols-3 gap-5">
        {books.map((dd) => (
          <BorrowedBooksCard
            refetch={refetch}
            key={dd._id}
            BData={dd}
          ></BorrowedBooksCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
