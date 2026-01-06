'use client';

import React, { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'


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

  const pathname = usePathname()
  const isDashboard = pathname.startsWith('/dashboard')

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
  <Link
    href="/"
    className={`font-medium transition-colors ${
      pathname === '/'
        ? 'text-orange-500'
        : 'text-gray-700 hover:text-gray-900'
    }`}
  >
    All listing
  </Link>

  <Link
    href="/about"
    className={`transition-colors ${
      pathname === '/about'
        ? 'text-orange-500'
        : 'text-gray-700 hover:text-gray-900'
    }`}
  >
    About us
  </Link>

  <Link
    href="/faq"
    className={`transition-colors ${
      pathname === '/faq'
        ? 'text-orange-500'
        : 'text-gray-700 hover:text-gray-900'
    }`}
  >
    FAQ
  </Link>

  <Link
    href="/blog"
    className={`transition-colors ${
      pathname === '/blog'
        ? 'text-orange-500'
        : 'text-gray-700 hover:text-gray-900'
    }`}
  >
    Blog
  </Link>
</div>


      
      {!isDashboard ? (<a href="/login">
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
            </a>)
            :
            (<div className="w-[181px] h-[35px] overflow-hidden cursor-pointer">
              <img
                src="/userNav.svg"
                alt="banner"
                className="w-full h-full object-cover"
               
              />
            </div>)
            }
            {/* Sign In Button */}
            
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
}