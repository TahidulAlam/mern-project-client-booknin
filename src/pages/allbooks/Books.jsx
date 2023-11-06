/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Books = ({ bookData }) => {
  console.log(bookData);
  const {
    book_name,
    image_link,
    ratings,
    quantity,
    category,
    shortDescription,
    author_name,
  } = bookData || {};
  console.log(quantity);
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
            <p>Ratings: {ratings}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
