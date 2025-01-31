import React from "react";
import { FaBeer, FaLock, FaPhoneAlt, FaLeaf } from "react-icons/fa";

function Why() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-4 pt-16 pb-8 bg-white-100">
        <div className="text-left md:w-1/2">
          <div className="text-secondary text-xs uppercase tracking-widest pb-4">
            Why Choose Smart And Move
          </div>
          <h2 className="text-4xl font-bold flex pb-4">
            Why Smart And<div className="text-secondary pl-1"> Move</div>
          </h2>
          <p className="mt-2 mb-8">
            Smart And Move offers reliable, efficient, and real-time bus services, ensuring a seamless travel experience. With consistent punctuality, eco-friendly routes, and user-friendly features, we help you reach your destination on time while building trust and convenience with every ride.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:w-1/2 mt-8 md:mt-0">
          <div className="bg-[#FEF3EF] p-5 border-solid border-2 rounded-md cursor-pointer hover:shadow-2xl transition flex flex-col items-center text-center">
            <div className="mb-8">
              <FaBeer size={40} color="#F45C20" />
            </div>
            <div className="text-lg font-bold max-w-[260px]">Comfort and Convenience</div>
            <div className="text-base p-3">
              Travel with ease and comfort in well-maintained, modern buses designed for your convenience.
            </div>
          </div>

          <div className="bg-[#f1fbf3] p-5 border-solid border-2 rounded-md cursor-pointer hover:shadow-2xl transition flex flex-col items-center text-center">
            <div className="mb-8">
              <FaLock size={40} color="#3DCD5C" />
            </div>
            <div className="text-lg font-bold max-w-[260px]">Transparent Pricing</div>
            <div className="text-base p-3">
              No hidden fees! What you see is what you get—clear and upfront pricing for every trip.
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-4">
        <div className="bg-[#EDF3FF] p-5 border-solid border-2 rounded-md cursor-pointer hover:shadow-2xl transition flex flex-col items-center text-center">
          <div className="mb-8">
            <FaPhoneAlt size={40} color="#2F6AE1" />
          </div>
          <div className="text-lg font-bold max-w-[260px]">24/7 Customer Support</div>
          <div className="text-base p-3">
            Always available! Our customer support team is ready to assist you anytime, day or night.
          </div>
        </div>

        <div className="bg-[#fbf1fb] p-5 border-solid border-2 rounded-md cursor-pointer hover:shadow-2xl transition flex flex-col items-center text-center">
          <div className="mb-8">
            <FaLeaf size={40} color="#D5414F" />
          </div>
          <div className="text-lg font-bold max-w-[260px]">Safe and Secure</div>
          <div className="text-base p-3">
            We prioritize your privacy. Ride with confidence knowing your information is securely handled.
          </div>
        </div>

        <div className="bg-[#f1fbf3] p-5 border-solid border-2 rounded-md cursor-pointer hover:shadow-2xl transition flex flex-col items-center text-center">
          <div className="mb-8">
            <FaLeaf size={40} color="#F45C20" />
          </div>
          <div className="text-lg font-bold max-w-[260px]">Eco-Friendly</div>
          <div className="text-base p-3">
            We're committed to a greener future with eco-conscious routes and reduced carbon emissions.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
