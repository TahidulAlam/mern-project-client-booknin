/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./banner.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const BannerSlider = () => {
  const axiosInstance = useAxios();
  const getImages = async () => {
    try {
      const res = await axiosInstance.get("/api/bn/image");
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const {
    data: imageData,
    isLoading,
    error,
    isPending,
  } = useQuery({
    queryKey: ["imageData"],
    queryFn: getImages,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(imageData.data);
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Array.isArray(imageData.data) ? (
          imageData.data.map((dd) => (
            <SwiperSlide key={dd._id}>
              <img
                className="lg:w-[300px] object-cover lg:h-[300px] rounded-full"
                src={dd?.imageUrl}
                alt=""
              />
            </SwiperSlide>
          ))
        ) : (
          <p>No images available.</p>
        )}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
