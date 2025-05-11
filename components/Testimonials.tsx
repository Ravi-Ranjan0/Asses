import React from 'react';
import companyLogo from '../public/Lookscout.png'; // Replace with your actual logo path

const Testimonials = () => {
  return (
    <div className="bg-white py-16 px-4">
      {/* Heading & Subheading */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#272D37] mb-4">
          What Our Customers Say
        </h2>
        <p className="text-[#5F6D7E]">
          Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win strategies to ensure domination.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-7xl mx-auto bg-[#F8F9FB] p-12 rounded-xl shadow-md">
        {/* Logo inside card */}
        <div className="mb-6 flex lg:justify-center justify-start">
          <img
            src={companyLogo.src}
            alt="Company Logo"
            className="w-32 h-auto invert"
          />
        </div>

        <p className="text-[20px] sm:text-[22px] lg:text-[28px] font-semibold lg:font-medium text-[#272D37] mb-6">
          Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!
        </p>
        <div className="flex lg:justify-center justify-start items-center gap-4">
          <img
            src="https://i.pravatar.cc/60?img=32"
            alt="Customer Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold text-[#272D37]">Lisa Smith</p>
            <p className="text-sm text-[#5F6D7E]">CEO Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
