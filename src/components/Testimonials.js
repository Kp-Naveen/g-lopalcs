import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Company Inc.",
    quote: "This financial service provided me with the best experience I've ever had. Their team is knowledgeable, efficient, and truly cares about their clients.",
  },
  {
    name: "Jane Smith",
    title: "Entrepreneur",
    quote: "I was impressed by the quick and easy loan process. They made it possible for me to start my own business. Highly recommended!",
  },
  {
    name: "Michael Brown",
    title: "Freelancer",
    quote: "The financial guidance I received was top-notch. They helped me manage my finances better and achieve my goals.",
  },
];

const Testimonials = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-white ">
      <div className="w-full  bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Testimonials
        </h1>
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <FaQuoteLeft className="text-blue-600 w-12 h-12 mb-4" />
              <p className="text-gray-700 text-lg italic mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-blue-600 font-bold text-xl">
                {testimonial.name}
              </p>
              <p className="text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
