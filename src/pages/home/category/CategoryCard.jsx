/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CategoryCard = ({ categorydata }) => {
  const { categoryName, bannerImageLink, description, totalBooks } =
    categorydata || {};
  return (
    <div>
      <div className="card lg:card-side bg-white h-80 p-3 dark:bg-sky-800">
        <figure className="w-1/2">
          <img
            className="rounded-lg w-60 p-5 object-fill"
            src={bannerImageLink}
            alt="Album"
          />
        </figure>
        <div className="card-body w-1/2 dark:text-sky-200">
          <h2 className="card-title dark:text-sky-200">
            Category: {categoryName}
          </h2>
          <p>Total Books: {totalBooks}</p>
          <p>{description.slice(0, 97)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary dark:bg-sky-200 dark:text-sky-950 border-none bg-sky-950 hover:bg-sky-800 text-white">
              See All Books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
