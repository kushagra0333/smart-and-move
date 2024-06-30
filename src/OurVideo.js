import React from "react";
import sampleImage from "./Asset/smiling-businesswoman-typing-laptop-sitting-cafe_197531-340.avif";
import { FaRegLightbulb } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

function About() {
  return (
    <div className="bg-primary text-white flex flex-col md:flex-row items-center justify-between w-full p-4 pt-16 pb-8 pl-11">
      <div className="text-left md:w-1/2">
        <h2 className="text-4xl font-bold pb-4">Our Video Introductions</h2>
        <p className="mt-2 mb-8">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt apis dui.
        </p>
        <ul>
          <li>
            <div className="flex flex-row mb-8">
              <div className="rounded-full bg-[#ffa229] p-2 mr-4">
                <FaRegLightbulb className="text-5xl" />
              </div>

              <div>
                <h2 className="text-xl font-bold">Explore ideas together</h2>
                <p className="mt-2">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
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
                <h2 className="text-xl font-bold">Bring those ideas to life</h2>
                <p className="mt-2">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="relative flex-shrink-1 ml-4 md:w-1/2">
        <img
          src={sampleImage}
          alt="Example"
          className="w-full h-auto max-w-xl object-cover ml-20 pl-14 rounded-2xl "
        />
        <FaYoutube className="absolute inset-0 m-auto text-8xl text-red-600" />
      </div>
    </div>
  );
}

export default About;
