"use client";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#FAFBFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Small Heading */}
        <p className="text-[#437EF7] font-semibold text-sm mb-2 text-center">
          1% OF THE INDUSTRY
        </p>

        {/* Main Heading */}
        <h2 className="text-[#272D37] font-semibold text-[28px] md:text-[32px] leading-[42px] mb-6 max-w-2xl mx-auto text-center">
          Welcome to your new digital reality that will rock your world truly at
          all throughout.
        </h2>

        {/* Email Input and Button */}
        <form className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row mb-8 gap-4 sm:gap-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 text-[#919BA7] border border-gray-300 
               rounded-md sm:rounded-l-md sm:rounded-r-none 
               focus:outline-none focus:ring-2 focus:ring-[#437EF7]"
          />
          <button
            type="submit"
            className="bg-[#437EF7] text-white font-semibold px-6 py-3 
               rounded-md sm:rounded-r-md sm:rounded-l-none 
               w-full sm:w-auto"
          >
            Submit
          </button>
        </form>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[#272D37] font-medium text-sm">
          {["Fully Secure", "24/7 Support", "Done Deal"].map((text, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#437EF7] flex items-center justify-center text-white text-sm">
                ✓
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
