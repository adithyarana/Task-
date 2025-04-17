import { PhoneCall } from "lucide-react";
import ambulance from "../assets/Ambulance.png"; // Replace with your actual image pathS

const HeroSection = () => {
  return (
    <section className="bg-white w-full py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-600">24/7</span> Emergency Ambulance Assistance<br />
            with <span className="text-red-600">AmbuRakshak</span>
          </h2>
          <p className="text-red-500 font-semibold text-lg mb-3">
            For Emergency Medical Service
          </p>
          <p className="text-gray-700 mb-6">
            With just one click, <strong>AmbuRakshak</strong> helps patients in emergencies.
            An ambulance arrives right at your doorstep for assistance.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-700 transition">
              2 min Ambulance
            </button>
            <div className="flex flex-col items-center">
              <span className="font-semibold mb-3">or</span>
              <p className="text-sm font-thin mb-1">Request Help</p>
              <a
                href="tel:+918630729931"
                className="border-2 border-red-600 text-red-600 px-4 py-2 rounded-md font-bold hover:bg-red-50 transition"
              >
                +91 8630729931
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="md:w-1/2 relative flex justify-center mb-8 md:mb-0">
          <div className="relative z-10">
            <img src={ambulance} alt="Ambulance" className="max-w-xs md:max-w-md" />
          </div>
          {/* You can layer a phone behind the ambulance like in the design */}
          {/* <div className="absolute top-0 right-10 z-0 hidden md:block">
            <img src={phoneMockup} alt="Phone Mockup" className="max-w-xs" />
          </div> */}
        </div>
      </div>

      {/* Fixed Call Now Button */}
      <a
        href="tel:+918630729931"
        className="fixed bottom-4 left-4 bg-white border border-red-600 text-red-600 px-4 py-2 rounded-full flex items-center shadow-lg hover:bg-red-50 transition z-50"
      >
        <PhoneCall size={18} className="mr-2" />
        Call Now
      </a>
    </section>
  );
};

export default HeroSection;
