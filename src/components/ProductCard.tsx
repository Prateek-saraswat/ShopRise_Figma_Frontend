'use client';

import React from 'react';
import Link from 'next/link'

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  condition: string;
  location: string;
}

export default function ProductCard({ 
  id,
  image,
  title,
  price,
  condition,
  location, 
}: ProductCardProps) {
  return (
    <Link  href={`/products/${id}`} className="block" >
    <div
      style={{
        width: '190px',
        height: '207px',
        borderRadius: '10px',
        border: '1px solid #E5E7EB',
        padding: '10px',
        gap: '10px'
      }}
      className="bg-white hover:shadow-lg transition-shadow cursor-pointer"
    >
      {/* Inner Container */}
      <div
        style={{
          width: '170px',
          height: '187px',
          display: 'flex',
          flexDirection: 'column',
          gap: '11px'
        }}
      >
        {/* Product Image */}
        <div
          style={{
            width: '170px',
            height: '125px',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#F3F4F6'
          }}
        >
          <img
            src='/Product-image.png'
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div
          style={{
            width: '170px',
            height: '51px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
          }}
        >
          {/* Title */}
          <h3
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FF6B35'
            }}
            className="truncate"
          >
         Liter trolley sprayer
          </h3>

          {/* Price */}
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#1F2937'
            }}
          >
            {"$9.99"} <span className="text-gray-500">{"(Used)"}</span>
          </div>

          {/* Location */}
          <div
            style={{
              width: '90px',
              height: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              marginTop: '4px'
            }}
          >
            
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: '#6B7280',
                fontWeight:400,
              }}
              className="truncate"
            >
              {"Los Angeles.CA"}
            </span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}