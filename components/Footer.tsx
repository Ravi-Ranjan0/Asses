import React from "react";
import { FaFacebookF, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#151B28] text-[#A5ACBA] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Section 1: Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              <img className="h-6 w-auto" src="./Lookscout.png" alt="Your Company" />
            </h2>
            <p className="text-sm text-[#5F6D7E]">
              Generate outside the box thinking with the possibility to target the low.
            </p>
          </div>

            {/* Section 2: Hidden Links */}
            <div className="hidden md:block lg:hidden mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Join our Newsletter</h4>
            <p className="text-sm text-[#5F6D7E] mb-4">
              Get the latest news and updates right in your inbox.
            </p>
            <form className="w-full max-w-2xl mx-auto flex flex-row mb-8 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-[#919BA7] border border-gray-300 
                  rounded-l-md rounded-r-none bg-[#2C3444]
                  focus:outline-none focus:ring-2 focus:ring-[#437EF7]
                  text-sm sm:text-sm md:text-base"
              />
              <button
                type="submit"
                className="bg-[#437EF7] text-white font-semibold px-2 py-2 
                  rounded-r-md rounded-l-none 
                  w-auto text-sm md:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>


          {/* Combined Section: Resources + Products + Pages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2 lg:col-span-1">
            <div>
              <h4 className="text-lg font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-[#5F6D7E]">
                <li>Community</li>
                <li>Events</li>
                <li>Help Center</li>
                <li>Partners</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Products</h4>
              <ul className="space-y-2 text-sm text-[#5F6D7E] mb-6">
                <li>Integrations</li>
                <li>Solutions</li>
                <li>Features</li>
                <li>Enterprise</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Newsletter */}
          <div className="md:hidden lg:block mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Join our Newsletter</h4>
            <p className="text-sm text-[#5F6D7E] mb-4">
              Get the latest news and updates right in your inbox.
            </p>
            <form className="w-full max-w-2xl mx-auto flex flex-row mb-8 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-[#919BA7] border border-gray-300 
                  rounded-l-md rounded-r-none bg-[#2C3444]
                  focus:outline-none focus:ring-2 focus:ring-[#437EF7]
                  text-sm sm:text-sm md:text-base"
              />
              <button
                type="submit"
                className="bg-[#437EF7] text-white font-semibold px-2 py-2 
                  rounded-r-md rounded-l-none 
                  w-auto text-sm md:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-[#5F6D7E]">
          <p>© 2023 Lookscout. All rights reserved.</p>
          <div className="flex gap-8 mt-4 sm:mt-0 text-[#F9F9F9]">
            <FaFacebookF className="hover:text-[#437EF7]  w-6 h-6 cursor-pointer" />
            <FaGoogle className="hover:text-[#437EF7]  w-6 h-6 cursor-pointer" />
            <FaApple className="hover:text-[#437EF7]  w-6 h-6 cursor-pointer" />
            <FaInstagram className="hover:text-[#437EF7]  w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
