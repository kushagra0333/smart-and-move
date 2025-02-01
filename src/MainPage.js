import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import busBg from "./Asset/bus-bg.png";

const statesOfIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${busBg})` }}
    >
      <header className="flex justify-between items-center p-4 bg-black bg-opacity-30 relative">
        <div className="flex items-center gap-10">
          <div className="text-2xl font-bold">Smart And Move</div>
          <nav className="hidden lg:flex">
            <ul className="flex gap-6 text-lg">
              <li className="cursor-pointer">Nearest Bus Stop</li>
              <li className="cursor-pointer">Real Time Tracking</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Feedback</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </nav>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden absolute right-4 top-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
          >
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-black bg-opacity-75 p-6">
            <ul className="flex flex-col gap-4 text-lg">
              <li className="cursor-pointer">Nearest Bus Stop</li>
              <li className="cursor-pointer">Real Time Tracking</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Feedback</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">
                <button className="border border-white px-4 py-2 text-white rounded-md w-full">
                  Log In
                </button>
              </li>
              <li className="cursor-pointer">
                <button className="bg-white text-black px-4 py-2 rounded-md w-full">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        )}

        <div className="hidden lg:flex gap-3">
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
          <h1 className="text-5xl font-bold mb-10">Navigate Roads with Comfort</h1>
          <h2 className="text-2xl font-bold mb-4">
            Fill out the form below to book your tickets and begin your journey.
          </h2>
        </div>

        {/* Form Section */}
        <div className="bg-black bg-opacity-40 p-6 rounded-lg flex flex-col items-center max-w-4xl mx-auto gap-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
            {/* From Dropdown */}
            <div className="relative">
              <label className="block mb-1">From</label>
              <select
                className="px-10 py-2 rounded-md border border-gray-300 text-black w-full"
              >
                <option value="" disabled selected>
                  Select State
                </option>
                {statesOfIndia.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <FaMapMarkerAlt className="absolute top-10 left-3 text-gray-500" />
            </div>

            {/* To Dropdown */}
            <div className="relative">
              <label className="block mb-1">To</label>
              <select
                className="px-10 py-2 rounded-md border border-gray-300 text-black w-full"
              >
                <option value="" disabled selected>
                  Select State
                </option>
                {statesOfIndia.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <FaMapMarkerAlt className="absolute top-10 left-3 text-gray-500" />
            </div>

            {/* Passengers Input */}
            <div className="relative mx-2">
              <label className="block mb-1">Passengers</label>
              <input
                type="number"
                placeholder="1"
                className="px-10 py-2 rounded-md border border-gray-300 text-black w-full"
              />
              <FaUser className="absolute top-10 left-3 text-gray-500" />
            </div>

            {/* Departure Date Input */}
            <div className="relative">
              <label className="block mb-1">Departure</label>
              <input
                type="date"
                className="px-10 py-2 rounded-md border border-gray-300 text-black w-full"
              />
              <FaCalendarAlt className="absolute top-10 left-3 text-gray-500" />
            </div>

            {/* Search Button */}
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
