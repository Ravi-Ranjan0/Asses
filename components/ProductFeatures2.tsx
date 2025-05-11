import React from "react";
import img1 from "../public/Icon6.png";
import img2 from "../public/Icon7.png";
import img3 from "../public/Icon8.png";
import mobileImg from "../public/Photo.png"; // Mobile image
import desktopImg from "../public/Photo.png"; // Desktop image

const ProductFeatures2 = () => {
  return (
    <div className="bg-[#151B28] text-black py-12 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Mobile Image (appears only on small screens) */}
        <div className="block lg:hidden mb-10 text-center">
          <img
            src={mobileImg.src}
            alt="Feature Illustration"
            className="mx-auto w-full max-w-md"
          />
        </div>

        {/* Desktop Layout: Features on left, Image on right */}
        <div className="hidden lg:grid grid-cols-2 gap-12">
          {/* Features Column */}
          <div className="flex flex-col justify-center">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#151B28]  p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#437EF7]">
                    <img src={feature.icon.src} alt={feature.title} className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#F9F9F9]">
                  {feature.title}
                </h3>
                <p className="mb-4 text-[#A5ACBA]">{feature.description}</p>
                <a
                  href="#"
                  className="text-[#437EF7] hover:underline inline-flex items-center font-medium"
                >
                  Learn More
                  <span className="ml-1">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Desktop Image Column */}
          <div className="flex justify-center items-center">
            <img
              src={desktopImg.src}
              alt="Feature Illustration"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Features List on small screens */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#151B28]  p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#437EF7]">
                    <img src={feature.icon.src} alt={feature.title} className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#F9F9F9]">
                  {feature.title}
                </h3>
                <p className="mb-4 text-[#A5ACBA]">{feature.description}</p>
                <a
                  href="#"
                  className="text-[#437EF7] hover:underline inline-flex items-center font-medium"
                >
                  Learn More
                  <span className="ml-1">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: img1,
    title: "Explore ideas together",
    description:
      "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
  {
    icon: img2,
    title: "Bring those ideas to life",
    description:
      "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
  {
    icon: img3,
    title: "Ship better outcomes",
    description:
      "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
];

export default ProductFeatures2;
