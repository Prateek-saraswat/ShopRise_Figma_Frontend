'use client';

import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbStyled({ items }: BreadcrumbProps) {
  return (
    <div 
      className="flex flex-col items-start bg-white"
      style={{ 
        width: '1280px', 
        height: '57px',
        padding: '0px',
        gap: '9px',
        margin: '0 auto'
      }}
    >
      {/* Top Border Line */}
      <div 
        style={{ 
          width: '1280px', 
          height: '0px',
          border: '1px solid #D3D3D3',
          flex: 'none',
          order: 0,
          flexGrow: 0
        }}
      />

      {/* Breadcrumb Navigation Frame */}
      <div 
        className="flex items-center"
        style={{ 
          padding: '10px 25px',
          gap: '10px',
          width: '217px',
          height: '39px',
          flex: 'none',
          order: 1,
          flexGrow: 0
        }}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <svg 
                style={{ 
                  width: '10px', 
                  height: '10px',
                  transform: 'rotate(-90deg)',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0
                }}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path 
                  d="M6 12L10 8L6 4" 
                  stroke="#333333" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            
            {item.href ? (
              <Link 
                href={item.href}
                className="flex items-center justify-center"
                style={{ 
                  gap: '10px',
                  width: index === 0 ? '68px' : '69px',
                  height: '19px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#333333',
                  flex: 'none',
                  order: index === 0 ? 0 : 2,
                  flexGrow: 0
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span 
                className="flex items-center justify-center"
                style={{ 
                  gap: '10px',
                  width: '69px',
                  height: '19px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#1F3A93',
                  flex: 'none',
                  order: 2,
                  flexGrow: 0
                }}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Border Line */}
      <div 
        style={{ 
          width: '1280px', 
          height: '0px',
          border: '1px solid #D3D3D3',
          flex: 'none',
          order: 2,
          flexGrow: 0
        }}
      />
    </div>
  );
}