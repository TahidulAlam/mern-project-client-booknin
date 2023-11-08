/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { QueryClient, useQuery } from "@tanstack/react-query";
import BorrowedBooksCard from "./BorrowedBooksCard";
import { TailSpin } from "react-loader-spinner";

const BorrowedBooks = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
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
    return;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const books = Array.isArray(bookData.data) ? bookData.data : [];
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-center text-2xl font-semibold dark:text-sky-200 p-5">
          Borrowed Books page
        </h1>
        {isLoading ? (
          <>
            <TailSpin
              height="80"
              width="80"
              color="#3DB6F0"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </>
        ) : (
          <div>
            <table className="table table-auto text-white flex flex-col gap-5 justify-between dark:bg-sky-800 rounded-lg p-5 overflow-scroll lg:overflow-auto bg-white">
              <thead>
                <tr className="flex flex-row gap-24 justify-between pb-2 dark:text-white text-sky-950">
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Borrowed Date</th>
                  <th>Return Date</th>
                  <th>Return Button</th>
                </tr>
              </thead>
              <tbody>
                {books.length > 0 ? (
                  <tr className="dark:text-white text-sky-950 flex flex-col gap-5 justify-between  pt-5 px-2 text-center">
                    {books?.map((dd) => (
                      <BorrowedBooksCard
                        refetch={refetch}
                        key={dd._id}
                        BData={dd}
                      ></BorrowedBooksCard>
                    ))}
                  </tr>
                ) : (
                  <p className="p-20">No Data Available</p>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BorrowedBooks;
