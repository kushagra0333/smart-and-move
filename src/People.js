import React, { useRef } from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sample1 from "./Asset/577fecc62a4c5235cee2977557cb6590.jpg";

const customers = [
  {
    name: "John Doe",
    review: "Excellent Service!",
    feedback:
      "I had a great experience booking my bus tickets through this platform. The process was smooth, and I got my tickets instantly. Highly recommended!",
    image: sample1,
  },
  {
    name: "Jane Smith",
    review: "Very User-Friendly",
    feedback:
      "The website is very easy to navigate, and I found the best deals for my trip. The customer support was also very helpful when I had a query.",
    image: sample1,
  },
  {
    name: "Alice Johnson",
    review: "Reliable and Efficient",
    feedback:
      "I travel frequently, and this platform has never let me down. The buses are always on time, and the booking process is hassle-free.",
    image: sample1,
  },
  {
    name: "Bob Brown",
    review: "Great Discounts",
    feedback:
      "I saved a lot of money using the discounts and offers available on this platform. The payment process was also very secure.",
    image: sample1,
  },
  {
    name: "Charlie Davis",
    review: "Smooth Booking Experience",
    feedback:
      "I was able to book my bus tickets within minutes. The interface is intuitive, and I received my e-ticket immediately.",
    image: sample1,
  },
  {
    name: "Eve Wilson",
    review: "Highly Satisfied",
    feedback:
      "The platform offers a wide range of bus options, and I could easily compare prices and timings. My journey was comfortable and stress-free.",
    image: sample1,
  },
];

const CustomerFeedback = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="client_section py-16 bg-primary relative">
      <div className="container mx-auto ">
        <div className="heading_container text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-left text-white">
            What people say about us
          </h2>
          <div className="absolute top-0 right-0 mt-4 mr-4 flex space-x-2">
            <button
              onClick={previous}
              className="bg-secondary text-white p-2 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="bg-secondary text-white p-2 rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="carousel-wrap relative">
          <Slider ref={sliderRef} {...settings}>
            {customers.map((customer, index) => (
              <div key={index} className="item ">
                <div className="box bg-white p-6 rounded-lg shadow-lg mx-auto max-w-[350px] min-w-[300px] h-[400px]">
                  <div className="detail-box text-left h-full flex flex-col">
                    <div className="client_id flex mb-4">
                      <FaQuoteLeft
                        className="text-indigo-500 text-2xl items-left justify-start"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-gray-700 flex-grow">{customer.feedback}</p>
                    <div className="client_info mr-4 flex mt-5">
                      <div className="img-box mb-6">
                        <img
                          src={customer.image}
                          alt={customer.name}
                          className="box-img w-24 h-24 rounded-full mx-auto"
                        />
                      </div>
                      <div className="flex flex-col ml-4">
                        <h6 className="text-lg font-semibold">
                          {customer.name}
                        </h6>
                        <p className="text-sm text-gray-500">
                          {customer.review}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
