import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Products from "./components/Products";
import Blogs from "./components/Blogs";
import Testimonials from "./components/Testimonials";
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <Router>
      <nav className="bg-white h-[10vh] p-6 fixed w-full z-100  ">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="text-black text-2xl font-semibold">
            <Link to="/">GCS  LOGO</Link>
          </div>
         
          <div className="hidden lg:flex lg:items-center lg:space-x-4 text-xl ">
            <Link to="/" className="text-black hover:bg-gray-200 p-4 block lg:inline-block" onClick={handleLinkClick}>HOME</Link>
            <Link to="/about-us" className="text-black hover:bg-gray-200 p-4 block lg:inline-block" onClick={handleLinkClick}>ABOUT US</Link>
            <Link to="/works" className="text-black hover:bg-gray-200 p-4 block lg:inline-block" onClick={handleLinkClick}>HOW WE WORK</Link>
            <Link to="/products" className="text-black hover:bg-gray-200 p-4 block lg:inline-block" onClick={handleLinkClick}>PRODUCTS</Link>
            <Link to="/blogs" className="text-black hover:bg-gray-200 p-4 block lg:inline-block" onClick={handleLinkClick}>BLOGS & GALLERY</Link>
            <Link to="/testimonials" className="text-black hover:bg-gray-200 p-4 block lg:inline-block" onClick={handleLinkClick}>TESTIMONIALS</Link>
          </div>
          <div className="flex justify-center items-center h-screen">
      <button className="text-white text-xl py-3 px-6 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
        Apply Now
      </button>
    </div>
    <div className="block lg:hidden relative">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white rounded shadow-lg w-48 transition-all duration-300 ease-in-out text-lg ">
                <Link to="/" className="text-black hover:bg-gray-200 p-4 block" onClick={handleLinkClick}>HOME</Link>
                <Link to="/about-us" className="text-black hover:bg-gray-200 p-4 block" onClick={handleLinkClick}>ABOUT US</Link>
                <Link to="/works" className="text-black hover:bg-gray-200 p-4 block" onClick={handleLinkClick}>HOW WE WORK</Link>
                <Link to="/products" className="text-black hover:bg-gray-200 p-4 block" onClick={handleLinkClick}>PRODUCTS</Link>
                <Link to="/blogs" className="text-black hover:bg-gray-200 p-4 block" onClick={handleLinkClick}>BLOGS & GALLERY</Link>
                <Link to="/testimonials" className="text-black hover:bg-gray-200 p-4 block" onClick={handleLinkClick}>TESTIMONIALS</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow  pt-[10vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <footer>
      <div className="footer bg-[#1b1e27] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-8">
              Improve Your Credit Score
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Members with a TransUnion credit score of 619 or below who opened
              a Credit Builder plan saw an average credit score increase of 21
              points in 4 days of activating the plan. Late payments and other
              factors can negatively impact your score, including activity with
              your other credit accounts.
            </p>
          </div>

          <div className="flex justify-between space-x-6 mb-12">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-3xl hover:text-gray-400 transition-colors"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f text-3xl hover:text-gray-400 transition-colors"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube text-3xl hover:text-gray-400 transition-colors"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-3xl hover:text-gray-400 transition-colors"></i>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-2xl mb-4 text-white underline">
              Information
            </h3>
            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              About Us
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              Careers
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              In the News
            </a>

            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              Product Blog
            </a>
          </div>

          <div className="flex flex-col bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-2xl mb-4 text-white underline">
              Support
            </h3>
            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              Help Center
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              How It Works
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              Security Practices
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              Editorial Guidelines
            </a>
          </div>

          <div className="flex flex-col bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-2xl mb-4 text-white underline">
              Legal
            </h3>
            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              Privacy Policy
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              California Privacy Policy
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              Terms of Service
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
              Data Preferences
            </a>
          </div>
        </div>
      </div>
      </footer>
    </Router>
  );
}

export default App;
