import { Popover } from '@mui/material';
import { GoDotFill } from "react-icons/go";
import React from 'react';

const Header = () => {
  return (
    <div className="bg-[#F8F5FF] py-4 px-4 md:px-6 rounded-md w-full">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
        
        {/* Greeting */}
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
          Good Evening, Harsh
        </h1>

        {/* Active Calls */}
        <div className="flex items-center px-3 py-1 rounded-full border-2 border-[#5D17EA] self-start md:self-auto w-max">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
          <span className="text-sm md:text-md text-[#5D17EA]">Active Calls: 3</span>
        </div>

        {/* Sort + Export */}
        <div className="flex sm:flex-row sm:items-center sm:gap-4 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort By:</span>
            <select className="text-sm border bg-white rounded px-3 py-1">
              <option>Month</option>
              <option>Week</option>
              <option>Year</option>
            </select>
          </div>
          <button className="bg-[#5D17EA] text-white px-4 py-1 rounded-md text-sm">
            Export
          </button>
        </div>

      </div>
    </div>
  );
};

export default Header;
