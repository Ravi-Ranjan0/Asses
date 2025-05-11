import React from 'react';
import logo from '../public/Logo.png';
import logo2 from '../public/Logo (1).png';
import logo3 from '../public/Logo (2).png';
import logo4 from '../public/Logo (3).png';
import logo5 from '../public/Logo (4).png';
import logo6 from '../public/Logo (5).png';

const logos = [
  logo.src,
  logo2.src,
  logo3.src,
  logo4.src,
  logo5.src,
  logo6.src,
];

const LogoSection = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Heading & Subheading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-[#272D37] mb-4">Proud to Be Used By</h2>
        <p className="text-[#5F6D7E]">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
      </div>

      {/* Logo Section */}
      <div className="max-w-7xl mx-auto">
        {/* Flex Container for Logos */}
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center w-full sm:w-32 md:w-32 lg:w-32">
              <img src={logo} alt={`Logo ${index + 1}`} className="w-[25%] sm:w-[75%] lg:w-[95%] h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
