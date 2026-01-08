'use client';

import React from 'react';

export default function ProductListingGrid() {
  const products = Array(36).fill({
    name: 'Liter trolley sprayer',
    price: '$9.99',
    condition: '(Used)',
    location: 'Los Angeles.CA',
    image: '/landingpg-product.png'
  });

  return (
    <div className="flex flex-col items-center py-5">
      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-[17px] w-[1229px] pb-5">
        {products.map((product, index) => (
          <div 
            key={index}
            className="border border-gray-300 rounded-[10px] p-[10px] w-[190px] h-[207px]"
          >
            <div className="flex flex-col items-center gap-[11px]">
              <div className="flex flex-col gap-[11px] w-[170px]">
                {/* Product Image */}
                <div className="relative w-[170px] h-[125px] bg-gray-200 rounded-[10px] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Heart Icon */}
                  <button className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-[2px]">
                  <h3 className="text-sm font-medium text-orange-500">{product.name}</h3>
                  <div className="flex items-end gap-[5px]">
                    <span className="text-xs font-medium" style={{ color: '#1F3A93' }}>{product.price}</span>
                    <span className="text-[11px] text-gray-800">{product.condition}</span>
                  </div>
                  <span className="text-xs text-gray-800">{product.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-[70px] w-[414px] h-[47px]">
        {/* Previous Button */}
        <button className="flex items-center justify-center w-[30px] h-[20px] bg-white">
          <svg className="w-[10px] h-[10px] transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-[10px] p-[10px]">
          <button className="flex items-center justify-center w-[27px] h-[27px] bg-gray-300 rounded text-sm text-gray-800">
            1
          </button>
          <button className="flex items-center justify-center w-[29px] h-[27px] bg-white rounded text-sm text-gray-800">
            2
          </button>
          <button className="flex items-center justify-center w-[29px] h-[27px] bg-white rounded text-sm text-gray-800">
            3
          </button>
          <span className="flex items-center justify-center w-[40px] h-[27px] text-sm text-gray-800">
            ...
          </span>
          <button className="flex items-center justify-center w-[29px] h-[27px] bg-white rounded text-sm text-gray-800">
            9
          </button>
        </div>

        {/* Next Button */}
        <button className="flex items-center justify-center w-[30px] h-[20px] bg-white">
          <svg className="w-[10px] h-[10px] transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}