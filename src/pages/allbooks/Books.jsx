/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Books = ({ bookData }) => {
  console.log(bookData);
  const {
    _id,
    book_name,
    image_link,
    ratings,
    quantity,
    category,
    shortDescription,
    author_name,
  } = bookData || {};

  return (
    <div>
      <div className="card w-auto h-[450px] bg-base-100 shadow-xl dark:bg-sky-800">
        <figure className="px-10 pt-10">
          <img src={image_link} alt="books" className="rounded-sm" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title dark:text-sky-200">{book_name}</h2>
          <p className="dark:text-sky-200">{author_name}</p>
          <div className="flex flex-col justify-items-start items-start dark:text-sky-200">
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
            <p>Ratings: {ratings}</p>
          </div>
          <div className="card-actions">
            <Link to={`/booksDetails/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
