/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";

// const Ratings = ({ rating, totalStars, onStarClick }) => {
//   const stars = [];

//   for (let i = 1; i <= totalStars; i++) {
//     const starStyle = {
//       color: i <= rating ? "gold" : "gray",
//     };

//     stars.push(
//       <span
//         key={i}
//         onClick={() => onStarClick(i)}
//         style={starStyle}
//         role="button"
//         className="mask mask-star text-2xl"
//       >
//         ★
//       </span>
//     );
//   }

//   return <div className="rating">{stars}</div>;
// };

// export default Ratings;

import React, { useState } from "react";

const Ratings = ({ ratings, totalStars, onStarClick }) => {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    const starStyle = {
      color: i <= ratings ? "gold" : "gray",
    };

    stars.push(
      <label key={i}>
        <input
          type="radio"
          name="ratings"
          className="mask mask-star hidden"
          checked={i === ratings}
          onChange={() => onStarClick(i)}
        />
        <span
          className="text-3xl"
          role="img"
          aria-label="star"
          style={starStyle}
        >
          ★
        </span>
      </label>
    );
  }

  return <div className="ratings">{stars}</div>;
};

export default Ratings;
