'use client';
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#2B63D9" }} className="border-b border-white/30">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img
              className="h-6 w-auto"
              src="./Lookscout.png"
              alt="Your Company"
            />
          </div>

          {/* Navigation links (centered on larger screens) */}
          <div className="hidden sm:block mx-auto">
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-md bg-[#437EF7] px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Our Products
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Resources
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Contacts
              </a>
            </div>
          </div>

          {/* Login and SignUp buttons (right side on larger screens) */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="#"
              className="text-sm font-medium text-white hover:bg-blue-700 px-4 py-2 rounded-md"
            >
              Login
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white bg-[#437EF7] hover:bg-blue-700 px-4 py-2 rounded-md"
            >
              Sign Up
            </a>
          </div>

          {/* Hamburger button on the right (mobile only) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              className="block rounded-md bg-[#437EF7] px-3 py-2 text-base font-medium text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
            >
              Our Products
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
            >
              Resources
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
            >
              Contacts
            </a>
            <a
              href="#"
              className="block rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white"
            >
              Login
            </a>
            <a
              href="#"
              className="block rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
