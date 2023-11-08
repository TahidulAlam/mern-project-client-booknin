/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import banBKN from "../../../assets/images/light.png";
import banLogo from "../../../assets/images/bookninLogo.png";
// import LogoImg from "../../../components/headers/LogoImg";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-10  rounded-lg">
        <div className="flex justify-center items-center">
          <img
            className="object-left-top h-[300px] w-[full]"
            src={banBKN}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <img className="w-[250px]" src={banLogo} alt="" />
          <p className="text-base font-light text-sky-900 text-justify dark:text-sky-200">
            "Booknin Library: Where Every Page Tells a Story" is a captivating
            destination for book lovers and avid readers. Dive into a world of
            imagination, knowledge, and adventure as you explore our extensive
            collection of books. From thrilling tales to insightful literature,
            our library offers a unique story on every page. Experience the
            magic of reading and embark on unforgettable journeys through the
            power of words.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
