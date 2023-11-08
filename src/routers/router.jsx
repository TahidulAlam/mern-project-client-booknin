/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import App from "../App";
import Home from "../pages/home/Home";
import Addbook from "../pages/addbook/Addbook";
import Allbooks from "../pages/allbooks/Allbooks";
import BorrowedBooks from "../pages/borrowedBooks/BorrowedBooks";
import LogIn from "../pages/login/LogIn";
import Registration from "../pages/registration/Registration";
import BookDetails from "../pages/bookDetails/BookDetails";
import UpdateBoooks from "../pages/updatebook/UpdateBoooks";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../error/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <Addbook></Addbook>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoute>
            <Allbooks></Allbooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks/:category",
        element: <Allbooks></Allbooks>,
      },
      {
        path: "/booksDetails/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBooks/:id",
        element: <UpdateBoooks></UpdateBoooks>,
      },
      {
        path: "/borrowedBooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
