import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const points = [
    "Flexible",
    "Customer friendly",
    "Agile",
    "Cater to niche segments",
    "Ability to take measured risk",
    "Faster processing",
    "Provides short term loans which banks hesitate",
    "Faster documentation and processing",
    "Simpler and easier loan pre-closure and settlement policy",
    "Right financial guidance for your business to sustain longer",
    "Reputed & trustworthy - In business for 35 years",
    "Time is crucial for entrepreneur",
  ];

  return (
    <div className="h-[90vh] bg-white flex flex-col items-center   p-8  px-16 ">
      <div className=" w-full ">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
         Why  GCS?
        </h1>
        <p className="text-3xl mb-6 text-gray-700">
          Welcome to our financial services company! We are committed to providing
          you with the best financial solutions that are:
        </p>
        <ul className="space-y-4  text-2xl  ">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <FaCheckCircle className="text-blue-500 w-6 h-6 mr-2 mt-1" />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
