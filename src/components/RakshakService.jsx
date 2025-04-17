import { Ambulance, MapPin, PhoneCall, PlusCircle, Users2 } from 'lucide-react';
import Map from '../assets/india-map.svg'

const stateData = [
  { state: 'Uttar Pradesh', number: '67' },
  { state: 'Maharashtra', number: '23' },
  { state: 'Haryana', number: '08' }
];

const serviceStats = [
  { label: 'ALS', value: '20+', icon: PlusCircle },
  { label: 'MTS', value: '23+', icon: Users2 },
  { label: 'AmbuRakshak', value: '78+', icon: Ambulance },
  { label: 'BLS', value: '30+', icon: PhoneCall },
  { label: 'Rakshak', value: '108', icon: MapPin }
];

export default function RakshakService() {
  return (
    <section className="px-4 py-12 md:px-20 bg-white text-gray-800 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">
        Rakshak Service Areas & Availability
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-28 mb-12">
       
        <img
          src={Map}
          alt="India Map"
          className="w-full max-w-md"
        />

     
        <div className="flex flex-col gap-6">
          {stateData.map(({ state, number }) => (
            <div key={state} className="flex items-center gap-4 text-lg font-semibold">
              <div className="w-12 h-12 rounded-full border-8 border-red-500 bg-white text-black flex items-center justify-center shadow-md">
                {number}
              </div>
              <span className="text-gray-800 text-xl">{state}</span>
            </div>
          ))}
        </div>
      </div>

    
      <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
        We proudly serve <strong>Haryana, Uttar Pradesh, and Maharashtra</strong> with the fastest ambulance service and top-tier emergency care. Our fleet of <strong>Rakshaks operates round the clock</strong>, ensuring swift response times. AmbuRakshak operates extensively across these three states, providing first-class ambulance services with EMT support and seamless doctor consultation via <strong>AmbuLife Mitra</strong> branded medical equipment.
      </p>

      <p className="text-red-600 font-semibold mb-6">
        Book your ambulance now and receive assistance at your doorstep within just 2 minutes.
      </p>

      <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition mb-12">
        2 min Ambulance
      </button>

      {/* Service stats */}
      <div className="flex items-center justify-center -space-x-4  max-w-5xl mx-auto">
        {serviceStats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center border-4 w-40  bg-white border-red-500 aspect-square rounded-full shadow-sm "
          >
            <Icon className="text-red-500 w-8 h-8 mb-2" />
            <p className="text-xl font-bold text-gray-800 ">{value}</p>
            <p className="text-sm text-gray-600 ">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}