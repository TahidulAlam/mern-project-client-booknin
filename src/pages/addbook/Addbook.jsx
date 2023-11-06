/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
// import useAxios from "../../hooks/useAxios";
import axios from "axios";
const Addbook = () => {
  const { user } = useAuth();
  // const axiospost = useAxios();
  const url = "http://localhost:5000/api/bn/allbooks";
  const handleAddBook = async (e) => {
    e.preventDefault();
    const form = e.target;
    const book_name = form.book_name.value;
    const image_link = form.image_link.value;
    const ratings = form.ratings.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const author_name = form.author_name.value;
    const formData = {
      book_name,
      image_link,
      ratings,
      quantity,
      category,
      shortDescription,
      author_name,
      email: user.email,
    };
    try {
      const response = await axios.post(url, formData);
      const result = await response.json();
      if (result.insertedId) {
        Swal("product added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="w-full max-w-2xl mx-auto max-h-screen m-24"
        onSubmit={handleAddBook}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-first-name"
            >
              Image Link:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:text-white"
              id="grid-first-name"
              type="text"
              name="image_link"
              placeholder="Image link"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-last-name"
            >
              Name:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="book_name"
              placeholder="Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-last-name"
            >
              Quantity of book:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              placeholder="Number"
              min="0"
              name="quantity"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold dark:text-white mb-2"
              htmlFor="grid-last-name"
            >
              Author Name:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Name"
              name="author_name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-state"
            >
              Categories:
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 dark:text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus.bg-white focus.border-gray-500"
                id="grid-state"
                name="category"
              >
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Java Programming">Java Programming</option>
                <option value="Technology">Technology</option>
                <option value="Web Development">Web Development</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2 "
              htmlFor="grid-last-name"
            >
              Ratings :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              name="ratings"
              placeholder="Number"
              min="0"
              max="5"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
              htmlFor="grid-text"
            >
              Short Description :
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus.bg-white focus.border-gray-500"
              id="grid-text"
              type="text"
              placeholder="Short Description"
              rows="4"
              cols="50"
              name="shortDescription"
            />
          </div>
          <input
            type="submit"
            className="w-[98%] mx-auto btn hover:bg-sky-950 dark:hover:bg-sky-500 bg-sky-400 hover:text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default Addbook;
