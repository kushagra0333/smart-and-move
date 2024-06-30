import React from "react";
import sampleImage from "./Asset/sample1.jpeg";
import { FaArrowAltCircleRight } from "react-icons/fa";

const text = {
  description: (
    <>
      We have been using Intelegencia as our DevOps vendor for our field service
      applications over the last couple of years and I’m extremely pleased with
      their performance, ability to execute, and willingness to adapt in our
      ever-changing environment.
      <br />
      Perry is an outstanding leader who is fanatical about customer
      satisfaction. He has built a solid team which has consistently delivered
      on projects thereby exceeding everyone’s expectations.
      <br />
      <br />I would strongly recommend their services to any organization that
      is looking for solid, reliable, and predictable outcomes.
    </>
  ),
};

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-4 pt-16 pb-8 bg-white-100">
      <div className="text-left md:w-1/2">
        <div className="text-secondary text-xs uppercase tracking-widest pb-4">
          Welcome to RegisterKaro.in
        </div>
        <h2 className="text-4xl font-bold flex pb-4">
          About<div className="text-secondary pl-1"> Register Karo</div>
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
