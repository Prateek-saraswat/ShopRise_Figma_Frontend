'use client';

import React, { useState } from 'react';

export default function SecondaryNavbar() {
  const [selectedFilters, setSelectedFilters] = useState([
    'Ready to ship',
    'Antiques & Collectibles',
    'Auto Parts',
    'Books, Movies & Music',
    'Electronics',
    'Furniture',
    'Home Improvement & Tools'
  ]);

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filter));
  };

  const clearAll = () => {
    setSelectedFilters([]);
  };

  return (
    <div className="w-full bg-white">
      {/* Categories and Search Row */}
      <div className="flex items-center justify-between px-[27px] py-[9px] border-b border-gray-300">
        {/* Left Side - Categories and Links */}
        <div className="flex items-center gap-[15px]">
          {/* Categories Dropdown */}
          <button className="flex items-center gap-[5px]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
            </svg>
            <span className="text-base font-medium text-gray-800">Categories</span>
            <svg className="w-[10px] h-[10px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          {/* Divider */}
          <div className="w-[25px] h-0 border-l border-gray-800"></div>

          {/* Navigation Links */}
          <div className="flex items-center gap-[15px]">
            <a href="#" className="text-base font-normal text-gray-800 hover:text-orange-500">For you</a>
            <a href="#" className="text-base font-normal text-gray-800 hover:text-orange-500">Local</a>
            <a href="#" className="text-base font-normal text-gray-800 hover:text-orange-500">Selling</a>
            <a href="#" className="text-base font-normal text-gray-800 hover:text-orange-500">Buying</a>
            
            {/* More Dropdown */}
            <button className="flex items-center gap-[2px] text-base font-normal text-gray-800">
              More
              <svg className="w-[10px] h-[10px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side - Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-[25px] px-[10px] py-[2px] w-[406px]">
          <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search..."
            className="flex-1 outline-none text-base px-2"
          />
          <button className="bg-orange-500 text-white px-[10px] py-2 rounded-[20px] text-base font-medium">
            Search
          </button>
        </div>
      </div>

      {/* Sort and Location Row */}
      <div className="flex items-center justify-between px-[27px] py-[9px] border-b border-gray-300">
        {/* Sort By */}
        <div className="flex items-center gap-[10px]">
          <span className="text-base font-medium text-gray-800">Sort by:</span>
          <div className="relative">
            <select className="appearance-none border border-gray-300 rounded-md px-[10px] py-[10px] pr-[30px] text-base font-normal text-gray-800 cursor-pointer">
              <option>Less viewed</option>
              <option>Most viewed</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-[10px] h-[10px] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-end gap-[3px]" style={{ color: '#1F3A93' }}>
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1F3A93"/>
          </svg>
          <span className="text-lg font-medium">Los Angeles,CA</span>
          <span className="text-lg font-normal">-</span>
          <span className="text-lg font-normal">10 miles</span>
          <svg className="w-[10px] h-[10px]" fill="none" stroke="#1F3A93" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>

      {/* Filter Tags Row */}
      <div className="px-[27px] py-[10px] overflow-x-auto">
        <div className="flex items-center gap-5 min-w-max">
          {/* Filter Tags */}
          <div className="flex items-center gap-5">
            {selectedFilters.map((filter, index) => (
              <div 
                key={index}
                className="flex items-center gap-[5px] border border-gray-300 rounded-[20px] px-[12px] py-[10px] h-[37px]"
              >
                <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{filter}</span>
                <button onClick={() => removeFilter(filter)} className="flex-shrink-0">
                  <svg className="w-[10px] h-[10px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Clear All */}
          {selectedFilters.length > 0 && (
            <button 
              onClick={clearAll}
              className="text-base font-semibold text-orange-500 whitespace-nowrap"
            >
              Clear all categorie
            </button>
          )}
        </div>
      </div>
    </div>
  );
}