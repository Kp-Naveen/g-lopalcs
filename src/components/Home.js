import React from "react";
import {
  FaRegCreditCard,
  FaRegMoneyBillAlt,
  FaChartLine,
  FaClipboardList,
  FaPiggyBank,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
     <div className="flex flex-col md:flex-row items-center justify-center h-[90vh] bg-[#e2ceed] p-8 transition duration-300 ease-in-out">
  <div className="md:w-1/2 text-center md:text-left md:pl-8">
    <h1 className="text-4xl font-bold text-[#333] mb-4 transition-transform transform hover:scale-105">
      Welcome to Non-Banking Finance
    </h1>
    <p className="text-lg text-gray-700 mb-6">
      Your one-stop solution for all financial services.
    </p>
  </div>

  <div className="md:w-1/2 flex flex-col justify-center items-center">
  <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
    <h2 className="text-2xl font-semibold mb-4 text-center">Apply for a Loan</h2>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
        Full Name
      </label>
      <input
        type="text"
        id="fullname"
        placeholder="John Doe"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring transition duration-200"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        placeholder="123-456-7890"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring transition duration-200"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="example@mail.com"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring transition duration-200"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="turnover">
        Annual Turnover
      </label>
      <select
        id="turnover"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring transition duration-200"
        required
      >
        <option value="" disabled selected>Select your turnover</option>
        <option value="less_than_5_lakh">Less than 5 Lac</option>
        <option value="5_lakh_to_10_lakh">5 Lac to 10 Lac</option>
        <option value="10_lakh_to_25_lakh">10 Lac to 25 Lac</option>
        <option value="25_lakh_to_1_cr">25 Lac to 1 Cr</option>
        <option value="more_than_1_cr">More than 1 Cr</option>
      </select>
    </div>

    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Apply Now
      </button>
    </div>
  </form>
</div>

</div>


      <div className="py-12 bg-white  my-20">
        <div className="text-center mb-8">
          <h5 className="text-3xl font-semibold text-gray-800">
            Financial products for every step of your journey.
          </h5>
        </div>

        <div className="flex flex-wrap justify-around gap-8 lg:mx-28  py-10">
          <div className="flex flex-col items-center">
            <FaRegCreditCard className="w-16 h-16 mb-2 text-[#51ace1]" />
            <span className="font-medium text-xl mt-2">Credit</span>
          </div>
          <div className="flex flex-col items-center">
            <FaRegMoneyBillAlt className="w-16 h-16 mb-2 text-[#51ace1]" />
            <span className="font-medium text-xl mt-2">Cards</span>
          </div>
          <div className="flex flex-col items-center">
            <FaChartLine className="w-16 h-16 mb-2 text-[#51ace1]" />
            <span className="font-medium text-xl mt-2">Loans</span>
          </div>
          <div className="flex flex-col items-center">
            <FaClipboardList className="w-16 h-16 mb-2 text-[#51ace1]" />
            <span className="font-medium text-xl mt-2">Accounts</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPiggyBank className="w-16 h-16 mb-2 text-[#51ace1]" />
            <span className="font-medium text-xl mt-2">Savings</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 h-[90vh] ">
        <div className="bg-[#c8e4ce] p-8 shadow-lg text-center flex flex-col items-center 1">
          <img
            src="https://images.unsplash.com/photo-1593642632850-2e1c7db3c42b"
            alt="Credit Builder"
            className="w-32 h-32 mb-4 rounded-full shadow-md"
          />
          <h2 className="font-bold text-3xl mb-3  mt-10">
            Build Credit the Easy Way You Need
          </h2>
          <p className="mb-4 text-lg  mt-4">
            Increase your credit score by an average of 21 points in just 4 days
            with Credit Builder.
          </p>
          <p className="mb-4 text-lg  mt-4">
            Start now! A connected paycheck or Qualifying Direct Deposit is
            required.
          </p>
          <button className="mt-10 bg-green-600 text-white  text-xl py-3 px-6 rounded-lg shadow hover:bg-green-700 transition">
            Start Now
          </button>
        </div>

        <div className="bg-[#ffe4c9] p-8 shadow-lg text-center flex flex-col items-center 1">
          <img
            src="https://images.unsplash.com/photo-1516035011672-1b9bffb2067b"
            alt="Personalized Relief"
            className="w-32 h-32 mb-4 mt-10 rounded-full shadow-md"
          />
          <h2 className="font-bold text-3xl mb-3">
            Get the Personalized Relief You Need
          </h2>
          <p className="mb-4 text-lg  mt-4">
            Connect to government support and personalized debt relief options.
          </p>
          <p className="mb-4 text-lg  mt-4">
            See your roadmap for tailored options that meet your needs.
          </p>
          <button className="my-10 bg-green-600  text-lg text-white py-3 px-6 rounded-lg shadow hover:bg-green-700 transition">
            View Your Roadmap
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 my-10 h-[90vh]">
        <div className="flex items-center justify-center p-4">
          <h2 className="text-3xl font-bold">
            Financial progress starts with credit health.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="text-center p-4">
            <img
              src="path/to/icon1.png"
              alt="Credit Monitoring Icon"
              className="w-12 h-12 mx-auto mb-2"
            />
            <h3 className="text-2xl font-semibold">Credit monitoring</h3>
            <p className="text-xl">
              Get alerted to important changes to your reports.
            </p>
          </div>
          <div className="text-center p-4">
            <img
              src="path/to/icon2.png"
              alt="Insights Icon"
              className="w-12 h-12 mx-auto mb-2"
            />
            <h3 className="text-2xl font-semibold">Insights</h3>
            <p className="text-xl">
              Learn what affects your scores and what you can do to improve
              them.
            </p>
          </div>
          <div className="text-center p-4">
            <img
              src="path/to/icon3.png"
              alt="Better Decisions Icon"
              className="w-12 h-12 mx-auto mb-2"
            />
            <h3 className="text-2xl font-semibold">Better decisions</h3>
            <p className="text-xl">
              Get personalized recommendations for ways to use your credit more
              wisely.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2   my-10">
      <div className="flex items-center justify-center ">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Person on laptop"
            className=""
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center p-4 ">
          <h2 className="text-4xl font-bold">Articles and resources.</h2>
          <p className="text-xl my-8">
            Editorial insights to help you reach your financial goals.
          </p>
          <button className="text-white bg-green-600 text-xl py-4 px-6 rounded mt-8">
            Read more
          </button>
        </div>
        
      </div> */}

      
    </>
  );
};

export default Home;
