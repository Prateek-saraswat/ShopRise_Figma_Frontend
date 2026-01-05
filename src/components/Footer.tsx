'use client';

import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe with email:', email);
    // Add your subscription logic here
  };

  return (
    <footer className="bg-gray-100">
      <div 
        style={{ 
          width: '1280px', 
          height: '299px',
          position: 'relative',
          margin: '0 auto'
        }}
      >
        {/* Left Side - Logo, Description, Button */}
        <div 
          style={{ 
            width: '373px', 
            height: '234px',
            position: 'absolute',
            top: '33px',
            left: '25px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <span className="text-xl font-semibold text-gray-900">ShopRise</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed">
            ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, unparalleled user experience, and unwavering integrity. As we continue to grow and evolve, our core principle remains unchanged: to empower each user to buy and sell with confidence.
          </p>

          {/* Sell Button */}
          <button className="w-fit bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors font-medium">
            Sell on ShopRise
          </button>
        </div>

        {/* Middle Section - Links */}
        <div 
          style={{ 
            position: 'absolute',
            top: '33px',
            left: '450px',
            display: 'flex',
            gap: '120px'
          }}
        >
          {/* First Column */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors font-medium">
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

          {/* Second Column */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Terms and Conditions
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Shipping Policy
            </a>
          </div>
        </div>

        {/* Right Side - Newsletter */}
        <div 
          style={{ 
            position: 'absolute',
            top: '33px',
            right: '25px',
            width: '440px'
          }}
        >
          {/* Newsletter Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-900">Subscribe to our newsletter</h3>
            
            {/* Email Form */}
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex justify-end gap-3 mt-8">
              {/* Facebook */}
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div 
          style={{ 
            position: 'absolute',
            bottom: '20px',
            left: '0',
            right: '0',
            textAlign: 'center'
          }}
        >
          <p className="text-gray-700 text-sm">
            © All Right Reserved by | ShopRise | Copyright 2023
          </p>
        </div>
      </div>
    </footer>
  );
}