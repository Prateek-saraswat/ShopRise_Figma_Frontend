'use client';

import React, { useState } from 'react';

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  condition: string;
  location: string;
}

export default function FavouritesContent() {
  const [searchQuery, setSearchQuery] = useState('');

  // 15 products (5 columns × 3 rows)
  const products: Product[] = Array(15).fill(null).map((_, i) => ({
    id: i + 1,
    image: '/favourite.png',
    name: 'Liter trolley sprayer',
    price: '$9.99',
    condition: '(Used)',
    location: 'Los Angeles,CA'
  }));

  return (
    <div 
      className="relative bg-white"
      style={{ 
        width: '100%',
        minHeight: '832px',
        padding: '20px 25px'
      }}
    >
      {/* Top Right Actions */}
      <div 
        className="flex items-center absolute"
        style={{ 
          right: '25px',
          top: '20px',
          gap: '20px'
        }}
      >
        {/* Notification Icon */}
        <button>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 16.5c.41 0 .75-.34.75-.75h-1.5c0 .41.34.75.75.75zm3.75-3.75V8.625c0-2.03-1.1-3.73-3-4.185V4.125c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.315c-1.905.455-3 2.145-3 4.185v4.125L3.75 13.5v.75h10.5v-.75l-1.5-1.5z" fill="#333333"/>
          </svg>
        </button>

        {/* Go to marketplace */}
        <a 
          href="#"
          className="flex items-center"
          style={{ 
            gap: '8px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#333333'
          }}
        >
          Go to marketplace
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16"
            style={{ transform: 'rotate(45deg)' }}
          >
            <path d="M8 2l-1.41 1.41L11.17 8H2v2h9.17l-4.58 4.59L8 16l7-7z" fill="#000000"/>
          </svg>
        </a>
      </div>

      {/* Page Title */}
      <h1 
        style={{ 
          position: 'absolute',
          left: '25px',
          top: '20px',
          width: '111px',
          height: '27px',
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '22px',
          lineHeight: '27px',
          color: '#1F3A93'
        }}
      >
        Favourites
      </h1>

      {/* Search Bar */}
      <div 
        className="flex items-center absolute"
        style={{ 
          right: '25px',
          top: '54px',
          width: '406px',
          height: '39px',
          padding: '2px 2px 2px 10px',
          gap: '296px',
          border: '1px solid #D3D3D3',
          borderRadius: '25px',
          boxSizing: 'border-box'
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#333333"/>
        </svg>

        <button 
          className="flex items-center justify-center"
          style={{ 
            width: '74px',
            height: '35px',
            padding: '8px 10px',
            background: '#FF7F50',
            borderRadius: '20px',
            flexGrow: 1
          }}
        >
          <span 
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#FFFFFF'
            }}
          >
            Search
          </span>
        </button>
      </div>

      {/* Products Grid Container */}
      <div 
        className="flex flex-col items-center"
        style={{ 
          marginTop: '118px',
          width: '100%'
        }}
      >
        {/* Products Grid */}
        <div 
          className="flex flex-row flex-wrap"
          style={{ 
            width: '1023px',
            height: '675px',
            justifyContent: 'center',
            alignItems: 'flex-start',
            alignContent: 'center',
            padding: '0px 0px 20px',
            gap: '17px'
          }}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="flex flex-row items-flex-start"
              style={{ 
                width: '190px',
                height: '207px',
                padding: '10px',
                gap: '10px',
                border: '1px solid #D3D3D3',
                borderRadius: '10px',
                boxSizing: 'border-box',
                position: 'relative'
              }}
            >
              {/* Product Card Content */}
              <div 
                className="flex flex-col items-center"
                style={{ 
                  width: '170px',
                  height: '187px',
                  gap: '11px'
                }}
              >
                {/* Product Details */}
                <div 
                  className="flex flex-col items-flex-start"
                  style={{ 
                    width: '170px',
                    height: '187px',
                    gap: '11px'
                  }}
                >
                  {/* Product Image Container */}
                  <div style={{ position: 'relative', width: '170px', height: '125px' }}>
                    <div 
                      className="bg-gray-300"
                      style={{ 
                        width: '170px',
                        height: '125px',
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: 'cover',
                        borderRadius: '10px'
                      }}
                    />
                    
                    {/* Heart Icon */}
                    <button
                      style={{
                        position: 'absolute',
                        width: '24px',
                        height: '24px',
                        left: '137px',
                        top: '8px'
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                          fill="#FFFFFF"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Product Info */}
                  <div 
                    className="flex flex-col items-flex-start"
                    style={{ 
                      width: '170px',
                      height: '51px',
                      gap: '2px'
                    }}
                  >
                    {/* Product Name */}
                    <span 
                      style={{ 
                        width: '170px',
                        height: '17px',
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FF7F50'
                      }}
                    >
                      {product.name}
                    </span>

                    {/* Price & Condition */}
                    <div 
                      className="flex flex-row items-flex-end"
                      style={{ 
                        width: '75px',
                        height: '15px',
                        gap: '5px'
                      }}
                    >
                      <span 
                        style={{ 
                          width: '34px',
                          height: '15px',
                          fontFamily: 'Inter',
                          fontWeight: 500,
                          fontSize: '12px',
                          lineHeight: '15px',
                          color: '#1F3A93'
                        }}
                      >
                        {product.price}
                      </span>
                      <span 
                        style={{ 
                          width: '36px',
                          height: '13px',
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '11px',
                          lineHeight: '13px',
                          color: '#333333'
                        }}
                      >
                        {product.condition}
                      </span>
                    </div>

                    {/* Location */}
                    <div 
                      className="flex flex-row items-flex-end"
                      style={{ 
                        width: '90px',
                        height: '15px',
                        gap: '5px'
                      }}
                    >
                      <span 
                        style={{ 
                          width: '90px',
                          height: '15px',
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: '12px',
                          lineHeight: '15px',
                          color: '#333333'
                        }}
                      >
                        {product.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}