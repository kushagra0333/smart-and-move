import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Connect = () => {
  const gradientStyle = {
    background: 'linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)',
  };

  return (
    <div style={gradientStyle} className="text-center mb-12">
      {/* Heading Section */}
      <div className="text-white font-bold text-4xl pt-8 py-2">
        Find the Nearest Bus Stop
      </div>
      <div className="text-white text-sm pt-3 pb-8 uppercase tracking-widest">
        Enter your current location to find the nearest bus stop and get directions to it!
      </div>

      {/* Input and Submit Button */}
      <div className="mb-8 mx-3 ">
        <div className="flex justify-center">
          <div className="flex w-full sm:w-1/2 lg:w-1/3">
            <input
              type="text"
              placeholder="Enter Your Exact Location"
              className="rounded-l-sm px-4 py-2 w-full border shadow-lg focus:outline-none"
            />
            <button className="bg-secondary rounded-r-sm px-4 py-2 border shadow-lg">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Features with Checkmarks */}
      <div className="flex flex-col sm:flex-row justify-center items-center w-full space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="flex items-center justify-center">
          <div className="rounded-full p-3 flex items-center justify-center text-white mr-2">
            <IoCheckmarkDoneCircle />
          </div>
          <h2 className="text-sm text-white font-semibold">
            Instantly Find the Nearest Bus Stop to You
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-full p-3 flex items-center justify-center text-white mr-2">
            <IoCheckmarkDoneCircle />
          </div>
          <h2 className="text-sm text-white font-semibold">
            Seamless Access to Nearby Bus Stops
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-full p-3 flex items-center justify-center text-white mr-2">
            <IoCheckmarkDoneCircle />
          </div>
          <h2 className="text-sm text-white font-semibold">
            Your Personalized Bus Stop Search
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Connect;
