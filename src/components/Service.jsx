import mapImg from "../assets/india-map.svg";
import { MapPin } from "lucide-react";

const data = [
   {
    name: "Haryana",
    city: ["Gurgaon"]
   },
   {
    name: "Uttar Pradesh",
    city: ["Muradabad","Gaziabad","Dadri","Modinagar","Dasna","Duhai","Aslatnagar","Old Bus Ad","New Bus Ad","Vasundra"]
   },
   {
    name: "Maharastra",
    city: ["Thane","Mumbai"]
   },
];

const CityService = ({data}) => {
    return (
        <div className="flex flex-col items-start">
        <h2 className="text-xl font-semibold my-2">{data.name}</h2>
        <div className="grid grid-cols-2 gap-4">
            {
                data.city.map((c,indx) => (
                    <li className="flex items-center gap-2" key={indx}>
                <MapPin className="text-red-600 w-4 h-4" /> {c}
              </li>
                ))
            }
        </div>
    </div>
    )
}

const Service = () => {


  return (
    <section className="bg-white w-full py-10 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Our Service Areas
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Locations */}
        <div className="flex-1 grid grid-cols-1 gap-6 text-gray-800">

            {
                data.map((d,indx) => (
                    <CityService data={d} key={indx}/>
                ))
            }
        </div>

        {/* Map */}
        <div className="flex-1 flex justify-center">
          <img
            src={mapImg}
            alt="India Service Map"
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      <h3 className="text-center font-semibold text-lg mt-10">What makes us Different</h3>
    </section>
  );
};

export default Service;
