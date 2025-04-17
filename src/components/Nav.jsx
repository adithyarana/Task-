import React from 'react';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white">
      <div className="flex items-center">
        <div className="bg-red-600 text-white text-3xl font-bold rounded-xl w-14 h-14 flex items-center justify-center mr-2">
          a+
        </div>
        <div className="leading-5">
          <span className="text-red-600 font-bold text-sm block">Ambuvians</span>
          <span className="text-black font-semibold text-sm">Healthcare</span>
        </div>
      </div>

      <ul className="flex gap-8 font-medium text-gray-800">
        <li>
          <a href="#" className="text-red-500">Home</a>
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

      <div className="flex gap-3">
        <button className="bg-red-600 text-white px-5 py-2 rounded-md">Book</button>
        <button className="border border-red-600 text-red-600 px-5 py-2 rounded-md">Login</button>
      </div>
    </nav>
  );
};

export default Nav;
