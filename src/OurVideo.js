import React from "react";
import sampleImage from "./Asset/smiling-businesswoman-typing-laptop-sitting-cafe_197531-340.avif";
import { FaRegLightbulb } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

function About() {
  return (
    <div className="bg-primary text-white flex flex-col md:flex-row items-center justify-between w-full p-4 pt-16 pb-8">
      <div className="text-left w-full md:w-1/2 px-4 md:px-11">
        <h2 className="text-4xl font-bold pb-4">Seamless Bus Booking Experience</h2>
        <p className="mt-2 mb-8">
          Say goodbye to long queues and unreliable ticketing systems. Our platform ensures a smooth,
          transparent, and efficient way to book government bus tickets online.
        </p>
        <ul>
          <li>
            <div className="flex flex-row mb-8">
              <div className="rounded-full bg-[#ffa229] p-2 mr-4">
                <FaRegLightbulb className="text-5xl" />
              </div>

              <div>
                <h2 className="text-xl font-bold">Smart & Hassle-Free Booking</h2>
                <p className="mt-2">
                  Easily search, select, and book government bus tickets from the comfort of your home.
                  Our user-friendly interface makes booking seamless and stress-free.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-row mb-8">
              <div className="rounded-full bg-[#ffa229] p-2 mr-4">
                <AiOutlineFundProjectionScreen className="text-5xl" />
              </div>

              <div>
                <h2 className="text-xl font-bold">Real-Time Ticket Validation</h2>
                <p className="mt-2">
                  Every booking generates a unique QR code, ensuring transparency and preventing corruption.
                  Scan your QR code at bus gates for seamless entry.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 px-4">
        <img
          src={sampleImage}
          alt="Bus Booking System Preview"
          className="w-full h-auto max-w-xl object-cover rounded-2xl"
        />
        <FaYoutube className="absolute inset-0 m-auto text-8xl text-red-600" />
      </div>
    </div>
  );
}

export default About;
