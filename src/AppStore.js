import React from "react";
import sampleImage from "./Asset/vecteezy_smartphone-and-mobile-phone_11047522.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function AppStore() {
  return (
    <div className="flex flex-col md:flex-row items-center text-white bg-primary justify-between w-full  pt-16 ">
      <div className="text-left md:w-1/2 ml-20">
        <h2 className="text-4xl font-bold pb-4">
          <>
            Manage Your Services by your <br />
            Mobile Phone
          </>
        </h2>
        <p className="mt-2 mb-8 text-gray-400">
          <>
            Download our app to manage and track your services. Our app <br />
            enables you to stay in touch with our experts and aids you in
            tracking
            <br /> your progress.
          </>
        </p>
        <p className="mb-4">Get the App</p>
        <div className="flex flex-col md:flex-row">
          <button className="flex items-center bg-gray-50 text-black  py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 mr-5">
            <FaApple className="text-3xl mr-4 text-green-500" />
            <div className="text-left">
              <p className="text-xs">Get it on</p>
              <p className="text-lg font-bold">App Store</p>
            </div>
          </button>
          <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
            <FaGooglePlay className="text-3xl mr-4 text-green-500" />
            <div className="text-left">
              <p className="text-xs">Get it on</p>
              <p className="text-lg font-bold">GOOGLE PLAY</p>
            </div>
          </button>
        </div>
      </div>
      <div className="relative flex-shrink-0 ml-4 md:w-1/2 flex flex-row items-center space-x-4 overflow-hidden">
        <div className="w-full">
          <img
            src={sampleImage}
            alt="Example"
            className="w-full h-auto object-cover rounded translate-x-44 translate-y-40"
          />
        </div>

        <div className="w-full">
          <img
            src={sampleImage}
            alt="Example"
            className="w-full h-auto object-cover rounded  translate-y-10"
          />
        </div>
        <p className="absolute transform translate-x-[34rem] translate-y-[14rem] inset-0 m-auto ">
          <h2 className="font-bold text-xl text-primary ">
            Register<span className="text-secondary">Karo</span>
          </h2>
        </p>
      </div>
    </div>
  );
}

export default AppStore;
