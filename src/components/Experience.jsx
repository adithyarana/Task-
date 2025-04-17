import React from "react";
import { CheckCircle } from "lucide-react";
import ExpImage from '../assets/experience.svg'

const features = [
  "24/7 patient support",
  "Customized and Reliable Ambulance Service",
  "AmbuLife Mitra",
  "Emergency assistance time of 15 minutes or less",
  "Track your Ambulance",
  "Doctor at Home",
];

const Experience = () => {
  return (
    <section className="px-4 py-12 md:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
      {/* Left Side Content */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-2xl sm:text-3xl text-left lg:text-4xl font-extrabold text-red-600 leading-snug">
          Experience the all in<br />
          one portal for all your<br />
          needs like
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="text-red-500 w-5 h-5 mt-1" />
              <span className="text-sm text-left opacity-80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Image */}
      <div className="lg:w-1/2 flex justify-center relative">
        <img
          src={ExpImage}
          alt="Portal Preview"
          className="w-full max-w-lg"
        />
      </div>
    </section>
  );
};

export default Experience;
