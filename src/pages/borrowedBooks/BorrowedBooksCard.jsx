/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const BorrowedBooksCard = ({ BData, refetch }) => {
  const axiosInstance = useAxios();
  const {
    _id,
    book_name,
    image_link,
    author_name,
    category,
    return_date,
    borrowed_date,
  } = BData || {};
  const { mutate } = useMutation({
    mutationKey: ["BData"],
    mutationFn: () => {
      return axiosInstance.delete(`/api/bn/borrowedBooks/${_id}`);
    },
    onSuccess: () => {
      alert("delete done");
      refetch();
    },
  });

  return (
    <div>
      <div className="card w-auto h-[450px] bg-base-100 shadow-xl dark:bg-sky-800">
        <figure className="px-10 pt-10">
          <img src={image_link} alt="books" className="rounded-sm" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{book_name}</h2>
          <p>{author_name}</p>
          <div className="flex-col justify-between items-center gap-14">
            <p>Category: {category}</p>
            <div className="flex flex-col justify-start items-start">
              <p>Borrowed Date: {borrowed_date}</p>
              <p>Return Date: {return_date}</p>
            </div>
          </div>
          <div className="card-actions">
            <button onClick={() => mutate(_id)} className="btn btn-primary">
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooksCard;
