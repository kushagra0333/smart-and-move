import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Services = ({ house }) => {
  return (
    <div className="bg-service p-5  w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition flex flex-col items-center text-center ">
      {house.image}

      <div className="text-lg font-bold mt-8 max-w-[260px]">{house.title}</div>
      <div className="text-base p-3 ">{house.info}</div>
      <div className="text-sm font-semibold text-black-600 mb-4 flex items-center">
        {house.more} <FaArrowAltCircleRight className="ml-1" />
      </div>
    </div>
  );
};

export default Services;
