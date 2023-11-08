/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import useAxios from "../../hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

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
  const deleteBook = (_id) => {
    return axiosInstance.delete(`/api/bn/borrowedBooks/${_id}`, {
      data: { book_name },
    });
  };
  const { mutate } = useMutation({
    mutationKey: ["BData"],
    mutationFn: deleteBook,
    onSuccess: () => {
      Swal.fire({
        title: "Book Returned",
        text: "The book has been successfully returned.",
        icon: "success",
      });
      refetch();
    },
  });

  return (
    // <div>
    //   <div className="card w-auto h-[450px] bg-base-100 shadow-xl dark:bg-sky-800">
    //     <figure className="px-10 pt-10">
    //       <img src={image_link} alt="books" className="rounded-sm" />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">{book_name}</h2>
    //       <p>{author_name}</p>
    //       <div className="flex-col justify-between items-center gap-14">
    //         <p>Category: {category}</p>
    //         <div className="flex flex-col justify-start items-start">
    //           <p>Borrowed Date: {borrowed_date}</p>
    //           <p>Return Date: {return_date}</p>
    //         </div>
    //       </div>
    //       <div className="card-actions">
    //         <button
    //           onClick={() => mutate(_id)}
    //           className="btn btn-primary dark:bg-sky-200 border-none bg-[#47B8C1] hover:bg-sky-800 dark:hover:bg-sky-900 dark:text-sky-950 dark:hover:text-sky-200 text-sky-950 hover:text-sky-200"
    //         >
    //           Return
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <tr className="dark:text-white flex gap-20 justify-between w-full dark:  rounded-md p-3">
        <td>
          <img src={image_link} alt={book_name.slice(0, 15)} />
        </td>
        <td>{book_name.slice(0, 15)}</td>
        <td>{category}</td>
        {borrowed_date ? <td>{borrowed_date}</td> : <td>{return_date}</td>}
        <td>{return_date}</td>
        <td>
          <button
            onClick={() => mutate(_id)}
            className="btn btn-primary dark:bg-sky-200 border-none bg-[#47B8C1] hover:bg-sky-800 dark:hover:bg-sky-900 dark:text-sky-950 dark:hover:text-sky-200 text-sky-950 hover:text-sky-200"
          >
            Return
          </button>
        </td>
      </tr>
    </>
  );
};

export default BorrowedBooksCard;
