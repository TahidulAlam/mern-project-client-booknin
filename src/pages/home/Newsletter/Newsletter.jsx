/* eslint-disable no-unused-vars */
import React from "react";

import banBKN from "../../../assets/images/logoWhite.png";
const Newsletter = () => {
  return (
    <div>
      <div className="mx-auto w-full mt-10">
        <div className="relative isolate overflow-hidden  rounded-2xl sm:rounded-3xl xl:py-16 ">
          <div className="flex justify-center items-center p-5">
            <img
              className="object-left-top h-[80px] w-[full]"
              src={banBKN}
              alt=""
            />
          </div>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-sky-800 dark:text-sky-200 sm:text-4xl">
            Keep Updated
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-sky-800 dark:text-sky-200">
            Keep pace with SecureCloud advancements! Join our mailing list for
            selective, noteworthy updates.
          </p>

          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:bg-sky-800 dark:text-sky-200 border-none"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="btn btn-primary dark:bg-sky-200 border-none bg-[#47B8C1] hover:bg-sky-800 dark:hover:bg-sky-900 dark:text-sky-950 dark:hover:text-sky-200 text-sky-950 hover:text-sky-200"
            >
              Notify Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
