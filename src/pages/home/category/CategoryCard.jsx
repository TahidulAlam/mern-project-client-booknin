/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ categorydata }) => {
  const { categoryName, bannerImageLink, description, totalBooks, _id } =
    categorydata || {};
  return (
    <div>
      <div className="lg:card lg:card-side bg-white lg:h-80 h-full rounded-lg p-3 dark:bg-sky-800 flex flex-col">
        <figure className="lg:w-1/2 w-full flex items-center justify-center">
          <img
            className="rounded-lg lg:w-60 w-40 object-fill"
            src={bannerImageLink}
            alt="Album"
          />
        </figure>
        <div className="card-body lg:w-1/2 dark:text-sky-200 flex lg:flex-none justify-center items-center lg:items-start">
          <h2 className="card-title dark:text-sky-200">
            Category: {categoryName}
          </h2>
          <p className="lg:block hidden">{description.slice(0, 97)}</p>
          <div className="card-actions justify-start">
            <Link to={`/allbooks/${categoryName}`}>
              <button className="btn btn-primary dark:bg-sky-200 border-none bg-[#47B8C1] hover:bg-sky-800 dark:hover:bg-sky-900 dark:text-sky-950 dark:hover:text-sky-200 text-sky-950 hover:text-sky-200">
                {categoryName} Books
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
