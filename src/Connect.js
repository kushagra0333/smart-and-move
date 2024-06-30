import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Connect = () => {
  return (
    <div className="bg-primary text-center">
      <div className="text-white text-sm pt-8 uppercase tracking-widest">
        1% of the industry
      </div>
      <div className="text-white font-bold text-4xl py-2 pb-10">
        Welcome to your new Digital Reality, Now.
      </div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Enter your Mail"
          className="rounded-l-sm px-4 py-2 w-1/3 border shadow-1"
        />
        <button className="bg-secondary rounded-r-sm px-4 py-2 border shadow-1">
          Submit
        </button>
      </div>

      <div className="flex justify-center items-center w-full justify">
        <div className="flex items-center mx-4">
          <div className="rounded-full p-3 flex items-center justify-center text-white mr-2 ">
            <IoCheckmarkDoneCircle />
          </div>
          <h2 className="text-sm text-white font-semibold">Instant Result</h2>
        </div>

        <div className="flex items-center mx-4">
          <div className="rounded-full p-3 flex items-center justify-center text-white mr-2 ">
            <IoCheckmarkDoneCircle />
          </div>
          <h2 className="text-sm text-white font-semibold ">
            User-friendly Interface
          </h2>
        </div>

        <div className="flex items-center mx-4">
          <div className="rounded-full p-3 flex items-center justify-center text-white mr-2 ">
            <IoCheckmarkDoneCircle />
          </div>
          <h2 className="text-sm text-white font-semibold ">
            Personalized Interface
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Connect;
