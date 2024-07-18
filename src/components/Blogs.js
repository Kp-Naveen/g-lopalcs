import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const blogs = [
  {
    title: "How to Improve Your Financial Health",
    date: "July 15, 2024",
    author: "John Doe",
    excerpt: "Learn the best practices to improve your financial health and secure your future...",
    content: "In today's fast-paced world, managing your finances effectively is more important than ever. Here are some tips to get you started..."
  },
  {
    title: "Top Investment Strategies for 2024",
    date: "June 30, 2024",
    author: "Jane Smith",
    excerpt: "Discover the top investment strategies for the upcoming year and make informed decisions...",
    content: "Investing wisely is crucial for building wealth and achieving your financial goals. Here are the top strategies to consider..."
  },
  {
    title: "Understanding Credit Scores",
    date: "June 15, 2024",
    author: "Michael Brown",
    excerpt: "Your credit score plays a significant role in your financial life. Learn how to manage and improve it...",
    content: "A good credit score opens doors to better loan rates and financial opportunities. Here's what you need to know about maintaining a healthy credit score..."
  },
];

const Blogs = () => {
  return (
    <div className=" bg-white flex flex-col items-center py-6 px-4">
      <div className=" w-full bg-white p-8 ">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Our Blog
        </h1>
        <div className="space-y-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-600">{blog.title}</h2>
              <div className="flex items-center text-xl text-gray-500 mb-4">
                <FaCalendarAlt className="mr-2" /> {blog.date}
                <FaUser className="ml-4 mr-2" /> {blog.author}
              </div>
              <p className="text-gray-700 my-4  text-xl">{blog.excerpt}</p>
              <button className="text-blue-600  text-xl font-bold hover:underline">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
