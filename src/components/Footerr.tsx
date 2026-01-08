'use client';

import React, { useState } from 'react';

interface FooterProps {
  onSubscribe?: (email: string) => void;
}

export default function FooterResponsive({ onSubscribe }: FooterProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email && onSubscribe) {
      onSubscribe(email);
      setEmail('');
    } else if (email) {
      console.log('Subscribed with email:', email);
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer 
      style={{ 
        width: '100%',
        background: '#F7F7F7',
        padding: '40px 20px',
        boxSizing: 'border-box'
      }}
    >
      {/* Footer Content Container */}
      <div 
        style={{ 
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          width: '100%'
        }}
      >
        {/* Column 1: Logo & Description */}
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {/* Logo */}
          <div 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <div 
              style={{ 
                width: '40px',
                height: '40px',
                background: '#D3D3D3',
                borderRadius: '50%',
                flexShrink: 0
              }}
            />
            <span 
              style={{ 
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#333333'
              }}
            >
              ShopRise
            </span>
          </div>

          {/* Description */}
          <p 
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#333333',
              margin: '0',
              paddingLeft: '10px'
            }}
          >
            ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, unparalleled user experience, and unwavering integrity. As we continue to grow and evolve, our core principle remains unchanged: to empower each user to buy and sell with confidence.
          </p>

          {/* Sell Button */}
          <button
            style={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px 25px',
              background: '#1F3A93',
              borderRadius: '25px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#FFFFFF',
              transition: 'background 0.2s',
              width: 'fit-content',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#152B6B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1F3A93';
            }}
          >
            Sell on ShopRise
          </button>
        </div>

        {/* Column 2: Navigation Links 1 */}
        <nav 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}
        >
          <a 
            href="/listings"
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#FF7F50',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
          >
            All listing
          </a>
          <a 
            href="/about"
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FF7F50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#333333';
            }}
          >
            About us
          </a>
          <a 
            href="/faq"
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FF7F50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#333333';
            }}
          >
            FAQ
          </a>
          <a 
            href="/blog"
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FF7F50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#333333';
            }}
          >
            Blog
          </a>
        </nav>

        {/* Column 3: Navigation Links 2 */}
        <nav 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}
        >
          <a 
            href="/privacy"
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FF7F50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#333333';
            }}
          >
            Privacy Policy
          </a>
          <a 
            href="/terms"
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FF7F50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#333333';
            }}
          >
            Terms and Conditions
          </a>
          <a 
            href="/shipping"
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FF7F50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#333333';
            }}
          >
            Shipping Policy
          </a>
        </nav>

        {/* Column 4: Newsletter */}
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <span 
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '22px',
              color: '#333333'
            }}
          >
            Subscribe to our newsletter
          </span>

          {/* Email Input with Subscribe Button */}
          <div 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              padding: '2px 2px 2px 10px',
              border: '1px solid #D3D3D3',
              borderRadius: '25px',
              background: '#FFFFFF',
              width: '100%',
              maxWidth: '436px',
              boxSizing: 'border-box'
            }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubscribe();
                }
              }}
              style={{ 
                flex: 1,
                height: '35px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '19px',
                color: '#333333',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                minWidth: 0
              }}
            />
            <button
              onClick={handleSubscribe}
              style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px 15px',
                background: '#FF7F50',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '19px',
                color: '#FFFFFF',
                transition: 'background 0.2s',
                flexShrink: 0,
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E66B3C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FF7F50';
              }}
            >
              Subscribe
            </button>
          </div>

          {/* Social Media Icons */}
          <div 
            style={{ 
              display: 'flex',
              gap: '10px',
              marginTop: '10px'
            }}
          >
            {/* Facebook Icon */}
            <a 
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" rx="15" fill="#1F3A93"/>
                <path d="M16.5 10.5H18V8H16.5C15.1739 8 13.9021 8.52678 12.9645 9.46447C12.0268 10.4021 11.5 11.6739 11.5 13V15H9.5V17.5H11.5V22H14V17.5H16.5L17 15H14V13C14 12.7348 14.1054 12.4804 14.2929 12.2929C14.4804 12.1054 14.7348 12 15 12H16.5V10.5Z" fill="white"/>
              </svg>
            </a>

            {/* Instagram Icon */}
            <a 
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" rx="15" fill="#1F3A93"/>
                <path d="M15 10.5C16.3261 10.5 17.5979 11.0268 18.5355 11.9645C19.4732 12.9021 20 14.1739 20 15.5C20 16.8261 19.4732 18.0979 18.5355 19.0355C17.5979 19.9732 16.3261 20.5 15 20.5C13.6739 20.5 12.4021 19.9732 11.4645 19.0355C10.5268 18.0979 10 16.8261 10 15.5C10 14.1739 10.5268 12.9021 11.4645 11.9645C12.4021 11.0268 13.6739 10.5 15 10.5ZM15 12C14.2044 12 13.4413 12.3161 12.8787 12.8787C12.3161 13.4413 12 14.2044 12 15C12 15.7956 12.3161 16.5587 12.8787 17.1213C13.4413 17.6839 14.2044 18 15 18C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 14.2044 17.6839 13.4413 17.1213 12.8787C16.5587 12.3161 15.7956 12 15 12ZM20.5 10C20.5 9.73478 20.3946 9.48043 20.2071 9.29289C20.0196 9.10536 19.7652 9 19.5 9C19.2348 9 18.9804 9.10536 18.7929 9.29289C18.6054 9.48043 18.5 9.73478 18.5 10C18.5 10.2652 18.6054 10.5196 18.7929 10.7071C18.9804 10.8946 19.2348 11 19.5 11C19.7652 11 20.0196 10.8946 20.2071 10.7071C20.3946 10.5196 20.5 10.2652 20.5 10ZM15 8C12.87 8 12.6 8 11.85 8.04C11.27 8.07 10.86 8.16 10.51 8.3C10.16 8.45 9.87 8.63 9.58 8.92C9.29 9.21 9.11 9.5 8.96 9.85C8.82 10.2 8.73 10.61 8.7 11.19C8.67 11.94 8.66 12.21 8.66 14.34V15.66C8.66 17.79 8.66 18.06 8.7 18.81C8.73 19.39 8.82 19.8 8.96 20.15C9.11 20.5 9.29 20.79 9.58 21.08C9.87 21.37 10.16 21.55 10.51 21.7C10.86 21.84 11.27 21.93 11.85 21.96C12.6 22 12.87 22 15 22C17.13 22 17.4 22 18.15 21.96C18.73 21.93 19.14 21.84 19.49 21.7C19.84 21.55 20.13 21.37 20.42 21.08C20.71 20.79 20.89 20.5 21.04 20.15C21.18 19.8 21.27 19.39 21.3 18.81C21.33 18.06 21.34 17.79 21.34 15.66V14.34C21.34 12.21 21.34 11.94 21.3 11.19C21.27 10.61 21.18 10.2 21.04 9.85C20.89 9.5 20.71 9.21 20.42 8.92C20.13 8.63 19.84 8.45 19.49 8.3C19.14 8.16 18.73 8.07 18.15 8.04C17.4 8 17.13 8 15 8Z" fill="white"/>
              </svg>
            </a>
          </div>
          <div 
        style={{ 
          minWidth: '450px',
          maxWidth: '1280px',
          margin: '40px auto 0',
          padding: '20px 0 0',
          textAlign: 'center'
        }}
      >
        <span 
          style={{ 
            fontFamily: 'Inter',
            width: '100%',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            color: '#000000',
            display: 'inline-block'
          }}
        >
          © All Right Reserved by | ShopRise | Copyright 2023
        </span>
        </div>
        </div>
        
      </div>

    
       

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 1024px) {
          footer > div:first-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          footer {
            padding: 30px 15px !important;
          }
          
          footer > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }

        @media (max-width: 480px) {
          footer {
            padding: 25px 12px !important;
          }
        }
      `}</style>
    </footer>
  );
}