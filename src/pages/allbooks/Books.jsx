/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Ratings from "../../components/components/Ratings";

const Books = ({ bookData, categoryName }) => {
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
            {/* <p>Ratings: {ratings}</p> */}
            <Ratings ratings={ratings} totalStars={5} />
          </div>
          <div className="card-actions">
            {categoryName ? (
              <Link to={`/booksDetails/${_id}`}>
                <button className="btn btn-primary dark:bg-sky-200 border-none bg-[#47B8C1] hover:bg-sky-800 dark:hover:bg-sky-900 dark:text-sky-950 dark:hover:text-sky-200 text-sky-950 hover:text-sky-200">
                  Details
                </button>
              </Link>
            ) : (
              <Link to={`/updateBooks/${_id}`}>
                <button className="btn btn-primary dark:bg-sky-200 border-none bg-[#47B8C1] hover:bg-sky-800 dark:hover:bg-sky-900 dark:text-sky-950 dark:hover:text-sky-200 text-sky-950 hover:text-sky-200">
                  Update
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
