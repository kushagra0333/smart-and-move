import React from "react";
import img1 from "./Asset/bus-digital-ticketing.webp";
import img2 from "./Asset/qr-code-scanning.webp";
import img4 from "./Asset/secure-online-payment.webp";
import img5 from "./Asset/bus-travel-tips.webp";
import img6 from "./Asset/public-transport-future.webp";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blog = [
    {
      image: img1,
      who: "Arjav Jain",
      time: "15 Jan 2025",
      title: "Revolutionizing Bus Ticketing",
      info: "How digital ticketing and QR codes are transforming public transportation in India.",
      tag1: "Technology",
      tag2: "Innovation",
    },
    {
      image: img2,
      who: "Kushagra Pandey",
      time: "18 Jan 2025",
      title: "QR-Based Boarding System",
      info: "Understanding how QR-based ticketing prevents fraud and speeds up boarding.",
      tag2: "Security",
      tag3: "Automation",
    },
    {
      image: img4,
      who: "Abhey Tiwari",
      time: "20 Jan 2025",
      title: "Ensuring Secure Online Payments",
      info: "A look at how secure payment gateways enhance customer trust in digital booking.",
      tag1: "Payments",
      tag3: "Finance",
    },
    {
      image: img5,
      who: "Arjav Jain",
      time: "22 Jan 2025",
      title: "Tips for a Hassle-Free Bus Journey",
      info: "Essential tips for a smooth experience with online booking and digital tickets.",
      tag1: "Travel",
      tag2: "Comfort",
    },
    {
      image: img6,
      who: "Kushagra Pandey",
      time: "25 Jan 2025",
      title: "The Future of Public Transport",
      info: "How AI and digital innovations will shape the future of public transportation.",
      tag1: "AI",
      tag2: "Public Transport",
      tag3: "Innovation",
    },
  ];

  return (
    <div className="bg-white items-center text-left mb-8">
      <div className="text-secondary text-sm pt-8 uppercase tracking-widest text-center">
        Explore Our Blogs
      </div>
      <div className="font-bold text-4xl py-2 pb-10 text-center">
        Transforming Public Transport
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {blog.map((article, index) => (
          <div
            className="bg-white p-5 pb-10 w-full max-w-[352px] mx-auto cursor-pointer "
            key={index}
          >
            <img className="mb-8 " src={article.image} alt="" />
            <div className="flex items-center text-gray-600 gap-1">
              <div className="text-[20px] rounded-full">{article.who}</div>
              <div className="text-base decoration-solid">
                <ul>
                  <li>{article.time}</li>
                </ul>
              </div>
            </div>

            <div className="text-lg font-semibold max-w-[260px]">
              {article.title}
            </div>
            <div className="text-lg text-gray-600 mb-4">{article.info}</div>
            <div className="mb-4 flex gap-x-2 text-sm">
              {article.tag1 && (
                <div className="text-green-600 bg-green-200 rounded-full px-3 inline-block">
                  {article.tag1}
                </div>
              )}
              {article.tag2 && (
                <div className="text-violet-600 bg-violet-200 rounded-full px-3 inline-block">
                  {article.tag2}
                </div>
              )}
              {article.tag3 && (
                <div className="text-blue-600 bg-blue-200 rounded-full px-3 inline-block">
                  {article.tag3}
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
