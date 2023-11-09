/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import useAxios from "../../hooks/useAxios";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PDFViewer } from "@react-pdf/renderer";
import useAuth from "../../hooks/useAuth";
import useDate from "../../hooks/useDate";
import Swal from "sweetalert2";
import Ratings from "../../components/components/Ratings";
import PdfBook from "./PdfBook";
const BookDetails = () => {
  const axiosInstance = useAxios();
  const borrowed_date = useDate();
  const { user } = useAuth();

  const { displayName, email } = user || {};
  const { id } = useParams();
  const getBook = async () => {
    try {
      const url = `/api/bn/allbooks/${id}`;
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
  } = useQuery({
    queryKey: ["bookData"],
    queryFn: getBook,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const bookDetails = bookData.data;
  const {
    _id,
    book_name,
    image_link,
    ratings,
    quantity,
    category,
    shortDescription,
    author_name,
  } = bookDetails || {};
  // let bookId = uuid();
  const handleBorrow = async (e) => {
    e.preventDefault();
    const form = e.target;
    const return_date = form.return_date.value;
    const formData = {
      // bookId,
      book_name,
      image_link,
      author_name,
      category,
      return_date,
      borrowed_date,
      email: email,
      user_name: displayName,
    };
    try {
      const url = `/api/bn/borrowedBooks`;
      const res = await axiosInstance.post(url, formData);
      document.getElementById("my_modal_1").close();
      if (res.data.alreadyBorrowed) {
        Swal.fire("already Borrowed");
      } else {
        Swal.fire("Book Borrowed Successfully");
      }
    } catch (error) {
      document.getElementById("my_modal_1").close();
      if (error.response && error.response.status === 400) {
        Swal.fire("already borrowed this book");
      } else {
        Swal.fire("An error occurred while processing the request");
      }
    }
  };
  return (
    <div>
      <div className="">
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 dark:text-sky-100 lg:gap-5 gap-2 mt-14 dark:bg-sky-800 mb-20 p-10 rounded-lg bg-white">
            <div className="lg:w-1/2 mx-auto w-full flex justify-center items-center">
              <img
                className="lg:w-[350px] w-[200px] mx-auto"
                src={image_link}
                alt=""
              />
            </div>
            <div className="flex flex-col lg:gap-5 gap-2 lg:m-10 m-5">
              <h1 className="font-bold lg:text-4xl text-2xl">{book_name}</h1>
              <h1>Category:{category}</h1>
              <h1>Author Name: {author_name}</h1>
              <p>Quantity: {quantity}</p>
              <div className="flex flex-row">
                <Ratings ratings={ratings} totalStars={5} />
              </div>
              {/* <p>{shortDescription}</p> */}
              <div className="flex gap-5">
                <button
                  className="btn btn-primary dark:bg-sky-200 dark:text-sky-950 border-none bg-sky-950 hover:bg-sky-800 text-white"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Read the book
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box max-h-[450px] w-11/12 max-w-[850px]">
                    <PDFViewer style={{ width: "800px", height: "400px" }}>
                      <PdfBook data={shortDescription}></PdfBook>
                    </PDFViewer>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                {quantity === 0 ? (
                  <button className="btn btn-disabled">Out of Stock</button>
                ) : (
                  <>
                    <button
                      className="btn btn-primary dark:bg-sky-200 border-none bg-[#47B8C1] hover:bg-sky-800 dark:hover:bg-sky-900 dark:text-sky-950 dark:hover:text-sky-200 text-sky-950 hover:text-sky-200"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      Borrow
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box bg-sky-200 dark:bg-sky-800 w-11/12 max-w-2xl">
                        <form onSubmit={handleBorrow}>
                          <div className="modal-action flex justify-between items-center py-1">
                            <h1 className="text-center text-xl dark:text-sky-200">
                              Book Name :{" "}
                              <span className="font-semibold">{book_name}</span>
                            </h1>
                            <form method="dialog">
                              <button className="btn relative text-4xl bg-transparent hover:bg-transparent border-none text-rose-500">
                                <AiFillCloseCircle />
                              </button>
                            </form>
                          </div>

                          <div className="flex flex-col gap-5">
                            <div className="flex">
                              <level className="p-2 text-sky-950 dark:text-sky-200 w-[20%]">
                                Name:
                              </level>
                              <input
                                type="text"
                                name="username"
                                id=""
                                defaultValue={displayName}
                                className="p-2 w-[80%]"
                              />
                            </div>
                            <div className="flex">
                              <level className="p-2 text-sky-950 dark:text-sky-200 w-[20%]">
                                Email:
                              </level>
                              <input
                                type="email"
                                name="email"
                                id=""
                                defaultValue={email}
                                className="p-2 w-[80%]"
                              />
                            </div>
                            <div className="flex">
                              <level className="p-1 text-sky-950 dark:text-sky-200 w-[20%]">
                                Return Date:
                              </level>
                              <input
                                type="date"
                                name="return_date"
                                id=""
                                className="p-2 w-[80%]"
                                required
                              />
                            </div>
                            <button className="btn btn-primary dark:bg-sky-200 border-none bg-[#47B8C1] hover:bg-sky-800 dark:hover:bg-sky-900 dark:text-sky-950 dark:hover:text-sky-200 text-sky-950 hover:text-sky-200">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </dialog>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
