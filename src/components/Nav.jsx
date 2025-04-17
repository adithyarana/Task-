import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
      setIsModal(false);
  },[])

  return (
    <nav className="flex w-full justify-between items-center px-6 pb-4 bg-white">
      <div className="flex items-center">
        <div className="bg-red-600 text-white text-3xl font-bold rounded-xl w-14 h-14 flex items-center justify-center mr-2">
          a+
        </div>
        <div className="leading-5">
          <span className="text-red-600 font-bold text-sm block">
            Ambuvians
          </span>
          <span className="text-black font-semibold text-sm">Healthcare</span>
        </div>
      </div>

      <ul className="md:flex gap-8 font-medium text-gray-800 hidden">
        <li>
          <a href="#" className="text-red-500">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>

      <div className="md:flex gap-3 hidden">
        <button className="bg-red-600 text-white px-5 py-2 rounded-md">
          Book
        </button>
        <button className="border border-red-600 text-red-600 px-5 py-2 rounded-md">
          Login
        </button>
      </div>

      <div
        onClick={() => setIsModal(!isModal)}
        className="block md:hidden cursor-pointer relative z-50"
      >
        
        {
          isModal ? 
          <X width={32}/> : <Menu width={32} />
        }
        {
          isModal && <div className="absolute top-8 -left-18  bg-gray-200 py-4 px-8 rounded-xl">
          <ul className="flex z-50 flex-col gap-3 font-medium text-gray-800">
            <li>
              <a href="#" className="text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <button className="bg-red-600 text-white px-2 py-2 rounded-md">
              Book
            </button>
            <button className="border border-red-600 text-red-600 px-2 py-2 rounded-md">
              Login
            </button>
          </div>
        </div>
        }
      </div>
    </nav>
  );
};

export default Nav;
