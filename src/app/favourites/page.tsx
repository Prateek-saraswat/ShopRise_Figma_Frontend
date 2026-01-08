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

export default function FavouritesContentImproved() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // 15 products (5 columns × 3 rows on desktop)
  const products: Product[] = Array(15).fill(null).map((_, i) => ({
    id: i + 1,
    image: '/favourite.png',
    name: 'Liter trolley sprayer',
    price: '$9.99',
    condition: '(Used)',
    location: 'Los Angeles,CA'
  }));

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <div 
      style={{ 
        width: '100%',
        minHeight: '100vh',
        padding: '20px',
        background: '#FFFFFF',
        boxSizing: 'border-box'
      }}
    >
      {/* Header Section */}
      <div 
        style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '30px',
          maxWidth: '1280px',
          margin: '0 auto 30px'
        }}
      >
        {/* Page Title */}
        <h1 
          style={{ 
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: '27px',
            color: '#1F3A93',
            margin: 0
          }}
        >
          Favourites
        </h1>

        {/* Right Actions */}
        <div 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}
        >
          {/* Notification Icon */}
          <button 
            style={{ 
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: '5px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 16.5c.41 0 .75-.34.75-.75h-1.5c0 .41.34.75.75.75zm3.75-3.75V8.625c0-2.03-1.1-3.73-3-4.185V4.125c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.315c-1.905.455-3 2.145-3 4.185v4.125L3.75 13.5v.75h10.5v-.75l-1.5-1.5z" fill="#333333"/>
            </svg>
          </button>

          {/* Go to marketplace */}
          <a 
            href="#"
            style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            Go to marketplace
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16"
              style={{ transform: 'rotate(45deg)', flexShrink: 0 }}
            >
              <path d="M8 2l-1.41 1.41L11.17 8H2v2h9.17l-4.58 4.59L8 16l7-7z" fill="#000000"/>
            </svg>
          </a>

          {/* Search Bar */}
          <div 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              maxWidth: '406px',
              minWidth: '200px',
              height: '39px',
              padding: '2px 2px 2px 10px',
              gap: '10px',
              border: '1px solid #D3D3D3',
              borderRadius: '25px',
              boxSizing: 'border-box',
              background: '#FFFFFF'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#333333"/>
            </svg>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              placeholder="Search products..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                minWidth: 0,
                fontFamily: 'Inter',
                fontSize: '14px',
                color: '#333333'
              }}
            />

            <button 
              onClick={handleSearch}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 15px',
                background: '#FF7F50',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                marginLeft: 'auto',
                minWidth: '74px',
                height: '35px',
                flexShrink: 0
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap'
                }}
              >
                Search
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div 
        style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
          gap: '17px',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 0 20px'
        }}
      >
        {products.map((product) => (
          <div 
            key={product.id}
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              padding: '10px',
              border: '1px solid #D3D3D3',
              borderRadius: '10px',
              boxSizing: 'border-box',
              background: '#FFFFFF',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s, transform 0.2s',
              minWidth: '190px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Product Image Container */}
            <div 
              style={{ 
                position: 'relative',
                width: '100%',
                aspectRatio: '170/125',
                borderRadius: '10px',
                overflow: 'hidden',
                background: '#F0F0F0',
                marginBottom: '11px'
              }}
            >
              <div 
                style={{ 
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Heart Icon */}
              <button
                style={{
                  position: 'absolute',
                  width: '24px',
                  height: '24px',
                  right: '8px',
                  top: '8px',
                  border: 'none',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Toggle favorite:', product.id);
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path 
                    d="M8 14L7.05 13.15C3.4 9.86 1 7.68 1 5.05C1 2.87 2.67 1.2 4.85 1.2C6.04 1.2 7.19 1.76 8 2.66C8.81 1.76 9.96 1.2 11.15 1.2C13.33 1.2 15 2.87 15 5.05C15 7.68 12.6 9.86 8.95 13.15L8 14Z" 
                    fill="#FF7F50"
                    stroke="#FFFFFF" 
                    strokeWidth="1"
                  />
                </svg>
              </button>
            </div>

            {/* Product Info */}
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                width: '100%'
              }}
            >
              {/* Product Name */}
              <span 
                style={{ 
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#FF7F50',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  width: '100%'
                }}
                title={product.name}
              >
                {product.name}
              </span>

              {/* Price & Condition */}
              <div 
                style={{ 
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '5px',
                  flexWrap: 'wrap'
                }}
              >
                <span 
                  style={{ 
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
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#333333',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                  title={product.location}
                >
                  {product.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: '40px',
          gap: '15px',
          flexWrap: 'wrap',
          maxWidth: '1280px',
          margin: '40px auto 0'
        }}
      >
        {/* Left Arrow */}
        <button 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            background: '#FFFFFF',
            border: '1px solid #D3D3D3',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#F7F7F7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#FFFFFF';
          }}
        >
          <svg 
            width="10" 
            height="10"
            style={{ transform: 'rotate(90deg)' }}
            viewBox="0 0 10 10"
          >
            <path d="M2.5 1.25L6.25 5L2.5 8.75" stroke="#333333" strokeWidth="2" fill="none"/>
          </svg>
        </button>

        {/* Page Numbers */}
        <div 
          style={{ 
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {[1, 2, 3].map((page) => (
            <button 
              key={page}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '32px',
                height: '32px',
                padding: '0 10px',
                background: currentPage === page ? '#1F3A93' : '#FFFFFF',
                border: '1px solid #D3D3D3',
                borderRadius: '4px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                color: currentPage === page ? '#FFFFFF' : '#333333',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onClick={() => setCurrentPage(page)}
              onMouseEnter={(e) => {
                if (currentPage !== page) {
                  e.currentTarget.style.background = '#F7F7F7';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== page) {
                  e.currentTarget.style.background = '#FFFFFF';
                }
              }}
            >
              {page}
            </button>
          ))}
          
          <span 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              padding: '0 10px',
              fontFamily: 'Inter',
              fontSize: '14px',
              color: '#666666'
            }}
          >
            ...
          </span>
          
          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '32px',
              height: '32px',
              padding: '0 10px',
              background: currentPage === 9 ? '#1F3A93' : '#FFFFFF',
              border: '1px solid #D3D3D3',
              borderRadius: '4px',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              color: currentPage === 9 ? '#FFFFFF' : '#333333',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onClick={() => setCurrentPage(9)}
            onMouseEnter={(e) => {
              if (currentPage !== 9) {
                e.currentTarget.style.background = '#F7F7F7';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 9) {
                e.currentTarget.style.background = '#FFFFFF';
              }
            }}
          >
            9
          </button>
        </div>

        {/* Right Arrow */}
        <button 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            background: '#FFFFFF',
            border: '1px solid #D3D3D3',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onClick={() => setCurrentPage(prev => Math.min(9, prev + 1))}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#F7F7F7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#FFFFFF';
          }}
        >
          <svg 
            width="10" 
            height="10"
            style={{ transform: 'rotate(-90deg)' }}
            viewBox="0 0 10 10"
          >
            <path d="M2.5 1.25L6.25 5L2.5 8.75" stroke="#333333" strokeWidth="2" fill="none"/>
          </svg>
        </button>
      </div>
    </div>
  );
}