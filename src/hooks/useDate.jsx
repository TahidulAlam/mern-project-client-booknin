/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import React from "react";

const useDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      setCurrentDate(formattedDate);
    }, 1000); // Update the date every second

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return currentDate;
};

export default useDate;
