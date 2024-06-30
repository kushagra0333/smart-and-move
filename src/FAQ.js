import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const faqData = [
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, We can do that",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, We can do that",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, We can do that",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, We can do that",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4 shadow-1 mb-4 pl-6 pr-6">
    <button
      className="w-full text-left flex justify-between items-center focus:outline-none"
      onClick={onClick}
    >
      <span className="font-semibold text-lg">{question}</span>
      <span>{isOpen ? "-" : "+"}</span>
    </button>
    {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center w-full p-8 bg-gray-100">
      <div className="text-secondary text-sm pt-8 uppercase tracking-widest text-center mb-2">
        faq
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-950">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-8xl  ">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
      <a
        className="flex items-center justify-center text-primary font-semibold px-4 py-2 ml-4 transition"
        href="/"
      >
        Show more
        <FaArrowRight className="ml-2 text-primary size-3" />
      </a>
    </div>
  );
};

export default FAQ;
