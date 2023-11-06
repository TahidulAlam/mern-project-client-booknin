/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import banBKN from "../../../assets/images/bln.png";
import banLogo from "../../../assets/images/logoWhite.png";
// import LogoImg from "../../../components/headers/LogoImg";

const About = () => {
  const logowidth = "150px";
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-10 bg-[#3DB6F0] rounded-lg">
        <div className="flex justify-center items-center">
          <img
            className="object-left-top h-[300px] w-[full]"
            src={banBKN}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-start gap-4">
          <img src={banLogo} alt="" />
          <p className="text-base font-light text-sky-900 text-justify">
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
