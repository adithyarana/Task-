import React from 'react';
import Need1 from '../assets/need1.jpg'
import Need2 from '../assets/need2.jpg'
import Need3 from '../assets/need3.jpg'
import Need4 from '../assets/need4.jpg'

const Need = () => {
  return (
    <div className="py-12 px-4 md:px-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Why we need Ambuvians</h2>

      <div className="flex flex-col">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Left images */}
        <div className="flex flex-row w-full space-y-4 gap-4">
          <img src={Need1} alt="Traffic jam with ambulances" className="rounded-xl w-1/3 h-2/3"/>
          <img src={Need2} alt="Patients waiting on roadside" className="rounded-xl h-48 w-40" />
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
            Ambuvians is on a mission to address these problems
          </h3>
          <p className="text-gray-700">
            Ambuvians is on a mission to address a wide range of problems, with the ultimate goal of making quality
            healthcare solutions accessible to everyone. We’re here to simplify the complex and ensure healthcare is
            within reach for all.
          </p>
        </div>
        </div>

        {/* Right images */}
        <div className="flex flex-row gap-12 mt-4 items-center justify-center space-y-4">
          <img src={Need3} alt="Patient on bike" className="rounded-xl w-64 h-auto" />
          <img src={Need4} alt="Patients outside hospital" className="rounded-xl w-64 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Need;
