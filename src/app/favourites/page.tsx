'use client';

import React, { useState } from 'react';

export default function Favourites() {
  const [activeTab, setActiveTab] = useState('favourites');

  const products = Array(15).fill({
    name: 'Liter trolley sprayer',
    price: '$9.99',
    condition: '(Used)',
    location: 'Los Angeles.CA',
    image: '/product-image.jpg'
  });

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[223px] bg-gray-50 flex flex-col pt-[17px]">
        {/* Logo */}
        <div className="flex items-center px-[25px] gap-[10px] h-[40px] mb-[17px]">
          <div className="w-[40px] h-[40px] bg-gray-300 rounded-full"></div>
          <span className="text-lg font-semibold text-gray-800">ShopRise</span>
        </div>

        {/* Main Navigation */}
        <div className="flex flex-col px-[25px] gap-[10px] mb-auto">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] text-gray-800"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"/>
            </svg>
            <span className="text-base font-normal">Dashboard</span>
          </button>

          <button className="flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] text-gray-800">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className="text-base font-normal">Purchasing</span>
          </button>

          <button className="flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] text-gray-800">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
            </svg>
            <span className="text-base font-normal">Sales</span>
          </button>

          <button
            onClick={() => setActiveTab('favourites')}
            className={`flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[173px] h-[44px] ${
              activeTab === 'favourites' ? 'bg-white text-orange-500' : 'text-gray-800'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className={`text-base ${activeTab === 'favourites' ? 'font-medium' : 'font-normal'}`}>Favourites</span>
          </button>

          <button className="flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-base font-normal">Chat</span>
          </button>

          <button className="flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-base font-normal">Setting</span>
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col px-[25px] pb-[25px] gap-[10px]">
          <button className="flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-base font-normal">Help</span>
          </button>

          <button className="flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="text-base font-normal">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center px-6 pt-6 pb-4">
          <h1 className="text-[22px] font-medium" style={{ color: '#1F3A93' }}>Favourites</h1>
          
          <div className="flex items-center gap-4">
            <button className="w-[18px] h-[18px]">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </button>
            <a href="#" className="flex items-center gap-2 text-gray-800">
              <span className="text-base">Go to marketplace</span>
              <svg className="w-4 h-4 transform rotate-45" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-6 pb-6">
          <div className="flex items-center border border-gray-300 rounded-[25px] px-[10px] py-[2px] gap-[296px] w-[406px]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <button className="bg-orange-500 text-white px-[10px] py-2 rounded-[20px] text-base font-medium">
              Search
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex justify-center px-6 pb-5">
          <div className="flex flex-wrap justify-center gap-[17px] w-[1023px]">
            {products.map((product, index) => (
              <div key={index} className="border border-gray-300 rounded-[10px] p-[10px] w-[190px] h-[207px]">
                <div className="flex flex-col items-center gap-[11px]">
                  <div className="flex flex-col gap-[11px] w-[170px]">
                    {/* Product Image */}
                    <div className="relative w-[170px] h-[125px] bg-gray-200 rounded-[10px] overflow-hidden">
                      <img 
                        src={'/fav.png'} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                      {/* Heart Icon */}
                      <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
        </div>
      </div>
    </div>
  );
}