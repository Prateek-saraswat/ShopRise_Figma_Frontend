'use client';

import React from 'react';

export default function MainNavbar() {
  return (
    <div className="w-full h-[77px] bg-white border-b border-gray-300">
      <div className="flex items-center justify-between px-[25px] py-[17px]">
        {/* Logo */}
        <div className="flex items-center gap-[10px]">
          <div className="w-[40px] h-[40px] bg-gray-300 rounded-full"></div>
          <span className="text-lg font-semibold text-gray-800">ShopRise</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-[50px]">
          <a href="/" className="text-base font-medium text-orange-500">
            All listing
          </a>
          <a href="/about" className="text-base font-normal text-gray-800 hover:text-orange-500">
            About us
          </a>
          <a href="/faq" className="text-base font-normal text-gray-800 hover:text-orange-500">
            FAQ
          </a>
          <a href="blog" className="text-base font-normal text-gray-800 hover:text-orange-500">
            Blog
          </a>
        </nav>

        {/* Sign In Button */}
        <button 
          className="flex items-center justify-center px-[25px] py-[10px] rounded-[25px] text-white text-base font-medium"
          style={{ backgroundColor: '#1F3A93' }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}