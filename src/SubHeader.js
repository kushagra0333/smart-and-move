import React from "react";
import {
  FaCheckCircle,
  FaCreditCard,
  FaQrcode,
  FaEnvelope,
} from "react-icons/fa";

function IconHeadings() {
  const headings = [
    {
      text: "Book Your Ticket Online",
      icon: <FaCheckCircle />,
      color: "#eb5757",
    },
    {
      text: "Make Secure Payment",
      icon: <FaCreditCard />,
      color: "#27ae60",
    },
    {
      text: "Get QR Code for Entry",
      icon: <FaQrcode />,
      color: "#f2994a",
    },
    {
      text: "Receive Confirmation Mail",
      icon: <FaEnvelope />,
      color: "#828282",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center w-full p-8 bg-secondary justify-center sm:justify-around gap-6">
      {headings.map((heading, index) => (
        <div
          key={index}
          className="flex items-center text-center sm:text-left sm:flex-row flex-col"
        >
          <div
            className="rounded-full p-3 flex items-center justify-center text-white mb-3 sm:mb-0 sm:mr-3"
            style={{ backgroundColor: heading.color }}
          >
            {heading.icon}
          </div>
          <h2 className="text-l font-semibold sm:pl-3">{heading.text}</h2>
        </div>
      ))}
    </div>
  );
}

export default IconHeadings;
