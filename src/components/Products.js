import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const products = [
  {
    name: "Personal Loan",
    description: "Get a personal loan with low interest rates and flexible repayment options.",
    features: ["Low interest rates", "Flexible repayment", "Quick approval","Low interest rates", "Flexible repayment", "Quick approval"],
  },
  {
    name: "Business Loan",
    description: "Boost your business with our tailored business loan solutions.",
    features: ["Tailored solutions", "Competitive rates", "Fast processing","Tailored solutions", "Competitive rates", "Fast processing"],
  },
  {
    name: "Home Loan",
    description: "Own your dream home with our comprehensive home loan plans.",
    features: ["Affordable rates", "Long-term repayment", "Minimal paperwork","Long-term repayment", "Minimal paperwork","Long-term repayment" ],
  },
];

const Products = () => {
  return (
    <div className=" bg-white h-[90vh] flex flex-col items-center py-12 px-4">
      <div className=" w-full bg-white p-8 ">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Our Products
        </h1>
        <div className="flex    gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-600">{product.name}</h2>
              <p className="text-gray-700 text-2xl mb-6">{product.description}</p>
              <ul className="mb-4 text-xl space-y-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 mb-2">
                    <FaCheckCircle className="text-blue-600 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="text-blue-600  text-xl my-4 font-bold hover:underline">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
