import React from "react";
import { PhoneCall } from "lucide-react";
import doctor from '../assets/doctor.png'
import nurse from '../assets/nurse1.png'
import patient from '../assets/patient.png'
import slip from '../assets/slip.png'
import hospital from '../assets/hospital.png'
import vision1 from '../assets/vision1.png'
import vision2 from '../assets/vision2.png'
import vision3 from '../assets/vision3.png'
import vision4 from '../assets/vision4.png'



const stats = [
  { icon: doctor, value: "78+", label: "Ambulances" },
  { icon: nurse, value: "129+", label: "Health Personals" },
  { icon: patient, value: "2789+", label: "Patients" },
  { icon: slip, value: "100+", label: "Ambulance Drivers" },
  { icon: hospital, value: "1290 km+", label: "Area Covers" },
];

const visionItems = [
  {
    title: "To Provide",
    subtitle: "Medical Services",
    img: vision1,
  },
  {
    title: "To",
    subtitle: "Bridge Gap in Healthcare",
    img: vision2,
  },
  {
    title: "To Provide",
    subtitle: "Healthcare to remote Areas",
    img: vision3,
  },
  {
    title: "To",
    subtitle: "Economical and Fastest",
    img: vision4,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-4 py-10 md:px-20 relative">
      <div className="absolute top-4 left-4">
        <button className="flex items-center gap-2 text-red-600 border border-red-600 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-red-50 transition">
          <PhoneCall size={20} />
          Call Now
        </button>
      </div>

      {/* Why Choose Us */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Why Choose us</h2>
      <div className="bg-pink-100 rounded-lg p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img src={item.icon} alt={item.label} className="w-12 h-12 mb-2" />
            <h4 className="text-lg font-bold">{item.value}</h4>
            <p className="text-sm text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Our Vision */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center my-10">Our Vision</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visionItems.map((item, idx) => (
          <div
            key={idx}
            className="border-2 rounded-xl text-center px-4 py-6 shadow-sm hover:shadow-md transition"
          >
            <h4 className="font-semibold">{item.title}</h4>
            <h5 className="font-bold mb-4">{item.subtitle}</h5>
            <img src={item.img} alt={item.subtitle} className="mx-auto h-32 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
