import React from "react";
import img1 from "./Asset/e7dda523e77516da100b1a88dbaecb3c.jpeg";
import img2 from "./Asset/adefff9c6fad99774e0aa7808b2270ab.jpeg";
import img4 from "./Asset/76ceafadb9f758a56d19a086f7505a80.jpeg";
import img5 from "./Asset/6b913ddf85158d3f3246fba7da982400.jpeg";
import img6 from "./Asset/ab8c0e971321e0daafdbc3bc3adffb48.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blog = [
    {
      image: img1,
      who: "Prabhash Mishra",
      time: "1 Jan 2023",
      title: "Small Business & startup",
      info: "Like to know the secrets of tranforming a 2-14 team into a 3x Super Bowl winning Dynasty",
      tag1: "Tax & Audit",
      tag2: "Management",
    },
    {
      image: img2,
      who: "Mahesh Kumar",
      time: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      info: "Like to know the secrets of tranforming a 2-14 team into a 3x Super Bowl winning Dynasty",

      tag2: "Research",
      tag3: "Tax",
      tag4: "Complience",
    },
    {
      image: img1,
      who: "Rakhi Verma",
      time: "1 Jan 2023",
      title: "Growing Business Package",
      info: "Like to know the secrets of tranforming a 2-14 team into a 3x Super Bowl winning Dynasty",
      tag1: "Audit",

      tag3: "Money Back",
    },
    {
      image: img4,
      who: "Karan Kumar",
      time: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      info: "Like to know the secrets of tranforming a 2-14 team into a 3x Super Bowl winning Dynasty",
      tag1: "Money",
      tag2: "Management",
    },
    {
      image: img5,
      who: "Prabhash Mishra",
      time: "1 Jan 2023",
      title: "Small Business & startup",
      info: "Like to know the secrets of tranforming a 2-14 team into a 3x Super Bowl winning Dynasty",
      tag1: "",
      tag2: "News",
      tag3: "Tax & Return",
      tag4: "Audit",
    },
    {
      image: img6,
      who: "Miss Nora",
      time: "1 Jan 2023",
      title: "Small Business & startup",
      info: "Like to know the secrets of tranforming a 2-14 team into a 3x Super Bowl winning Dynasty",
      tag1: "Private Limited ",
      tag2: "Customer ",
      tag3: "",
      tag4: "",
    },
  ];

  return (
    <div className=" bg-white items-center text-left mb-8">
      <div className="text-secondary text-sm pt-8 uppercase tracking-widest text-center">
        Explore Our Blogs
      </div>
      <div className="font-bold text-4xl py-2 pb-10 text-center">
        Accelerate Digital Transformation
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {blog.map((house, index) => (
          <div
            className="bg-white p-5 pb-10 w-full max-w-[352px] mx-auto cursor-pointer "
            key={index}
          >
            <img className="mb-8 " src={house.image} alt="" />
            <div className="flex items-center text-gray-600 gap-1">
              <div className="text-[20px] rounded-full">{house.who}</div>
              <div className="text-base decoration-solid">
                <ul>
                  <li>{house.time}</li>
                </ul>
              </div>
            </div>

            <div className="text-lg font-semibold max-w-[260px]">
              {house.title}
            </div>
            <div className="flex gap-x-4 my-4">
              <div className="flex items-center text-gray-600 gap-1">
                <div className="text-[20px] rounded-full"></div>
                <div className="text-base">{house.bedrooms}</div>
              </div>
              <div className="flex items-center text-gray-600 gap-1">
                <div className="text-[20px] rounded-full"></div>
                <div className="text-base">{house.bathrooms}</div>
              </div>
            </div>
            <div className="text-lg text-gray-600 mb-4">{house.info}</div>
            <div className="mb-4 flex gap-x-2 text-sm">
              {house.tag1 && (
                <div className="text-green-600 bg-green-200 rounded-full px-3 inline-block">
                  {house.tag1}
                </div>
              )}
              {house.tag2 && (
                <div className="text-violet-600  bg-violet-200 rounded-full  px-3 inline-block">
                  {house.tag2}
                </div>
              )}
              {house.tag3 && (
                <div className="text-blue-600 bg-blue-200 rounded-full  px-3 inline-block">
                  {house.tag3}
                </div>
              )}
              {house.tag4 && (
                <div className="text-red-600 bg-red-200 rounded-full  px-3 inline-block">
                  {house.tag4}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <a
        className="flex items-center justify-center text-primary font-semibold px-4 py-2 ml-4 transition"
        href="/"
      >
        Show more blogs
        <FaArrowRight className="ml-2 text-primary size-3" />
      </a>
    </div>
  );
};

export default Blog;
