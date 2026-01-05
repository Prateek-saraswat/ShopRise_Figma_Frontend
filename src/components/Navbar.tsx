'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [selectedCategories, setSelectedCategories] = useState([
    'Arts & Crafts',
    'Antiques & Collectibles',
    'Auto Parts',
    'Books, Movies & Music',
    'Electronics',
    'Furniture',
    'Home Improvement & Tools'
  ]);

  const removeCategory = (category: string) => {
    setSelectedCategories(selectedCategories.filter(cat => cat !== category));
  };

  return (
    // Outer wrapper to apply scaling - makes 100% zoom look like 90% zoom
    <div style={{ 
      transform: 'scale(0.9)', 
      transformOrigin: 'top left',
      width: '111.11%'  // Compensate for scale: 100% / 0.9 = 111.11%
    }}>
    <div  className="bg-white shadow-sm mx-auto">
      {/* Top Navbar */}
      <nav className="border-b border-gray-200">
        <div className="px-6" style={{ height: '68px', display: 'flex', alignItems: 'center' }}>
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <span className="text-xl font-semibold text-gray-900">ShopRise</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center" style={{ width: '353px', height: '19px', gap: '50px' }}>
              <a href="#" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                All listing
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                About us
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                FAQ
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Blog
              </a>
            </div>

            {/* Sign In Button */}
            <button
              style={{
                width: '102px',
                height: '39px',
                borderRadius: '25px',
                paddingTop: '10px',
                paddingRight: '25px',
                paddingBottom: '10px',
                paddingLeft: '25px',
                gap: '10px'
              }}
              className="bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors flex items-center justify-center"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="border-b border-gray-200">
        <div className="px-6" style={{ height: '68px', display: 'flex', alignItems: 'center' }}>
          <div className="flex items-center justify-between w-full">
            {/* Left Side - Categories and Links */}
            <div className="flex items-center gap-6">
              {/* Categories Dropdown */}
              <button className="flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Categories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <span className="text-gray-300">|</span>

              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  For you
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Local
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Selling
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Buying
                </a>
                <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                  More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Search */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder=""
                  className="w-96 h-10 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="h-10 px-6 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="border-b border-gray-200">
        <div className="px-6" style={{ height: '67px', display: 'flex', alignItems: 'center' }}>
          <div className="flex items-center justify-between w-full">
            {/* Sort By */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Sort by:</span>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-gray-700">Less viewed</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Location */}
            <button className="flex items-center gap-2 text-blue-900 font-medium hover:text-blue-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Los Angeles,CA - 10 miles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Category Tags */}
      <div className="border-b border-gray-200">
        <div className="px-6" style={{ height: '67px', display: 'flex', alignItems: 'center' }}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3 flex-wrap">
              {selectedCategories.map((category) => (
                <div
                  key={category}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors"
                >
                  <span className="text-sm text-gray-700">{category}</span>
                  <button
                    onClick={() => removeCategory(category)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label={`Remove ${category}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors whitespace-nowrap">
              Clear all categories
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}