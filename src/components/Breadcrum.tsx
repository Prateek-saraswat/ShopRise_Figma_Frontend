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

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div 
      className="bg-white border-b border-gray-200"
      style={{ 
        width: '1280px', 
        height: '57px',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto'
      }}
    >
      <nav className="flex items-center" style={{ gap: '9px' }}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <svg 
                className="w-4 h-4 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            )}
            
            {item.href ? (
              <Link 
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-blue-900 font-medium">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}