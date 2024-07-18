import React from 'react';
import { FaPhoneAlt, FaUser, FaCheckCircle, FaThumbsUp } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const HowWeWork = () => {
  const steps = [
    { icon: <FaPhoneAlt />, title: 'Call us' },
    { icon: <FaUser />, title: 'Schedule a personal discussion' },
    { icon: <FaCheckCircle />, title: 'Document Verification' },
    { icon: <FaThumbsUp />, title: 'Loan Approval' },
    { icon: <RiMoneyDollarCircleLine />, title: 'Disbursement' },
  ];

  return (
    <div className="bg-white flex flex-col items-center ">
      <div className="  p-8 ">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">
          How We Work
        </h1>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center "
            >
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full shadow-lg mb-4">
                <span className="text-blue-600 text-3xl">{step.icon}</span>
              </div>
              <p className="text-gray-700 text-xl font-semibold">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
