import React from "react";
import Services from "./Services";
import About from "./About";
import Why from "./Why";
import OurVideo from "./OurVideo";

import SubHeader from "./SubHeader";
import Blog from "./Blog";
import People from "./People";
import FAQ from "./FAQ";
import Connect from "./Connect";
import { FaBus, FaClock, FaRocket, FaMapMarkerAlt, FaRoute } from 'react-icons/fa';
import Footer from "./Footer";
import MainPage from "./MainPage";

function App() {
 

const house = [
  {
    image: <FaBus size={61} color="#FFA229" />,
    title: "Modern Fleet",
    info: "Our buses are equipped with the latest technology and comforts.",
    more: "Learn more",
  },

  {
    image: <FaClock size={61} color="#FFA229" />,
    title: "On-Time Service",
    info: "We guarantee timely departures and arrivals, ensuring convenience.",
    more: "Learn more",
  },

  {
    image: <FaRocket size={61} color="#FFA229" />,
    title: "Speed & Efficiency",
    info: "We prioritize delivering you to your destination on time and without delays.",
    more: "Learn more",
  },

  {
    image: <FaMapMarkerAlt size={61} color="#FFA229" />,
    title: "Real Time Tracking",
    info: "Monitor progress instantly with our real-time tracking solutions. Stay updated and make informed decisions with seamless, live insights.",
    more: "Learn more",
  },

  {
    image: <FaMapMarkerAlt size={61} color="#FFA229" />,
    title: "Nearest Bus Station",
    info: "Find the closest bus stations effortlessly and plan your journey with ease, ensuring you're always on time.",
    more: "Learn more",
  },

  {
    image: <FaRoute size={61} color="#FFA229" />,
    title: "Route of the Bus",
    info: "Navigate bus routes efficiently with real-time updates and accurate path tracking, enhancing your travel experience.",
    more: "Learn more",
  },
];


  return (
    <div className=" w-full sm:max-w-[100%] mx-auto bg-white ">
      
      <MainPage />
      <div className=" bg-service flex flex-col items-center text-center pt-14">
        <div className="text-secondary text-sm uppercase tracking-widest">
          Welcome to registerkaro.in
        </div>
        <div className="font-bold text-4xl py-2 pb-8">Explore Our Services</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {house.map((house, index) => (
            <Services key={index} house={house} />
          ))}
        </div>

        <a
          className=" bg-primary text-white px-4 py-2 mt-8 mb-12 transition"
          to="/"
        >
          See All Services
        </a>
      </div>
      <About />
      <Why />
      <OurVideo />
    
      <SubHeader />
      <Blog />
      <Connect />
      <People />
      <FAQ />
    
      
      <Footer />
    </div>
  );
}

export default App;
