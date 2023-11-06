/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Addbook from "../pages/addbook/Addbook";
import Allbooks from "../pages/allbooks/Allbooks";
import BorrowedBooks from "../pages/borrowedBooks/BorrowedBooks";
import LogIn from "../pages/login/LogIn";
import Registration from "../pages/registration/Registration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/addBook",
        element: <Addbook></Addbook>,
      },
      {
        path: "/allBooks",
        element: <Allbooks></Allbooks>,
      },
      {
        path: "/borrowedBooks",
        element: <BorrowedBooks></BorrowedBooks>,
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
