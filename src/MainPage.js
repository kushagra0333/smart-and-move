import React from "react";
import {
  FaSearch,
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import busBg from "./Asset/bus-bg.png";
const MainPage = () => {
  return (
    <div
      className=" bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${busBg})` }}
    >
      <header className="flex justify-between items-center p-4 bg-black bg-opacity-30">
        <div className="flex items-center gap-10">
          <div className="text-2xl font-bold">Smart And Move</div>
          <nav>
            <ul className="flex gap-6 text-lg">
              <li className="cursor-pointer">Nearest Bus Stop</li>
              <li className="cursor-pointer">Real Time Tracking</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Feedback</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </nav>
        </div>
        <div className="relative w-96 ">
          <input
            type="search"
            placeholder="Search destination..."
            className="px-4 py-2 rounded-lg text-black w-full bg-black bg-opacity-30"
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className="flex gap-3">
          <button className="border border-white px-4 py-2 text-white rounded-md">
            Log In
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </header>
      <section className="text-center py-20 px-5 mt-[100px]">
        <div className="bg-black bg-opacity-40 p-4 px-0 rounded-lg mb-6">
        <h1 className="text-5xl font-bold mb-10">
          Navigate Roads with Comfort
        </h1>
        <h2 className=" text-2xl font-bold mb-4">
          Fill out the form below to book your tickets and begin your journey.
        </h2>
        </div>
        <div className="bg-black bg-opacity-40 p-6 rounded-lg flex flex-col items-center max-w-4xl mx-auto gap-4">
          <div className="grid grid-cols-5 gap-4 w-full">
            <div className="relative">
              <label className="block mb-1">From</label>
              <input
                type="text"
                placeholder="from"
                className="px-10 py-2 rounded-md border border-gray-300 text-black w-full"
              />
              <FaMapMarkerAlt className="absolute top-10 left-3 text-gray-500" />
            </div>
            <div className="relative">
              <label className="block mb-1">To</label>
              <input
                type="text"
                placeholder="to"
                className="px-10 py-2 rounded-md border border-gray-300 text-black w-full"
              />
              <FaMapMarkerAlt className="absolute top-10 left-3 text-gray-500" />
            </div>
            <div className="relative mx-2">
              
              <label className="block mb-1">Passengers</label>
              <input
                type="number"
                placeholder="1"
                className="px-10 py-2 rounded-md border border-gray-300 text-black w-full"
              />
              <FaUser className="absolute top-10 left-3 text-gray-500" />
            </div>
            <div className="relative">
            <label className="block mb-1">Departure</label>
              <input
                type="date"
                placeholder="Date"
                className="px-10 py-2 rounded-md border border-gray-300 text-black w-full"
              />
              <FaCalendarAlt className="absolute top-10 left-3 text-gray-500" />
            </div>
            <div className="flex items-end">
              <button className="bg-black text-white font-bold px-6 py-2 rounded-md w-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
