import React from "react";
import img1 from "../public/Icon.png";
import img2 from "../public/Icon (1).png";
import img3 from "../public/Icon (2).png";
import img4 from "../public/Icon (3).png";
import img5 from "../public/Icon (4).png";
import img6 from "../public/Icon (5).png";
import { i } from "framer-motion/client";

const Feature = () => {
  return (
    <div className="bg-white text-black py-12 px-4">
    <div className=" mx-auto max-w-7xl ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2 text-[#272D37]">
          Messaging for all
        </h2>
        <p className="text-[#5F6D7E]">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#437EF7]">
                <img src={feature.icon.src} alt={feature.title} className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2  text-[#272D37]">
              {feature.title}
            </h3>
            <p className="mb-4 text-[#5F6D7E]">{feature.description}</p>
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
  );
};

const features = [
  {
    icon: img1,
    title: "Easier Work Organization",
    description:
      "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. ",
  },
  {
    icon: img2,
    title: "Streamlined Processes",
    description:
      "Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.",
  },
  {
    icon: img3,
    title: "Marketing Analytics",
    description:
      "Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.",
  },
  {
    icon: img4,
    title: "Fast Connection",
    description:
      "Completely pursue scalable customer cross-media through potentialities. Holistically quickly installed portals.",
  },
  {
    icon: img5,
    title: "Easier Integrations",
    description:
      "Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.",
  },
  {
    icon: img6,
    title: "Workflow Builder",
    description:
      "Collaboratively administrate turnkey service channels whereas virtual e-tailers. This is objectively scalable metrics whereas.",
  },
];

export default Feature;
