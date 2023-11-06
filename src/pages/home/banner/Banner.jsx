/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../../assets/images/bannerNew.png";
import bannerSm from "../../../assets/images/banner.png";

import BannerSlider from "./BannerSlider";
const Banner = () => {
  return (
    <div>
      <div className="rounded-lg mt-3 relative flex lg:justify-start justify-center items-center">
        <img className="hidden lg:block rounded-lg" src={banner} alt="" />
        <img className="block lg:hidden rounded-lg" src={bannerSm} alt="" />
        <div className="absolute z-10 lg:right-28 hidden lg:block right-0 lg:w-[30%] w-[40%] lg:h-[300px] h-[80px] text-center">
          <BannerSlider></BannerSlider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
