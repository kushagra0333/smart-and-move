import React from "react";
import sampleImage from "./Asset/sample1.jpeg";
import { FaArrowAltCircleRight } from "react-icons/fa";

const text = {
  description: (
    <>
      We have been working on revolutionizing public transportation with our innovative high-tech bus service over the last couple of years, and I’m extremely proud of the progress we’ve made in addressing inefficiencies and corruption in this sector.
      <br />
      Our solution is built on transparency, reliability, and adaptability to cater to the ever-changing needs of daily commuters and environmentally conscious riders. By integrating advanced technology like QR-based ticketing and AI-powered fare management systems, we have consistently exceeded expectations and delivered tangible improvements in public transport efficiency.
      <br />
      <br />I would strongly recommend our services to any organization or authority looking to enhance their public transportation system with reliable, secure, and cutting-edge solutions.
    </>
  ),
};

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-4 pt-16 pb-8 bg-white-100">
      <div className="text-left md:w-1/2">
        <div className="text-secondary text-xs uppercase tracking-widest pb-4">
          Welcome to Smart And Move
        </div>
        <h2 className="text-4xl font-bold flex pb-4">
          About<div className="text-secondary pl-1"> Smart And Move</div>
        </h2>
        <p className="mt-2 mb-8">{text.description}</p>
        <button className="flex items-center bg-primary text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
          <span>Learn More</span>
          <FaArrowAltCircleRight className="ml-2" />
        </button>
      </div>
      <div className="flex-shrink-0 ml-4 md:w-1/2 ">
        <img
          src={sampleImage}
          alt="Example"
          className="w-full h-auto max-w-3xl object-cover rounded border border-amber-600"
        />
      </div>
    </div>
  );
}

export default About;
