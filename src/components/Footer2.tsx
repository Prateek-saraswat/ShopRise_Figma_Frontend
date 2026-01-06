'use client';

import React, { useState } from 'react';

export default function FooterComponent() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe with email:', email);
  };

  return (
    <footer 
      className="relative"
      style={{ 
        position: 'absolute',
        width: '1280px',
        height: '299px',
        left: '0px',
        bottom: '0px',
        background: '#F7F7F7',
        margin: '0 auto'
      }}
    >
      {/* Left Section - Logo, Description, Button */}
      <div 
        className="flex flex-col absolute"
        style={{ 
          width: '373px',
          height: '234px',
          left: '25px',
          top: 'calc(50% - 234px/2 + 0.5px)',
          padding: '0px',
          gap: '20px'
        }}
      >
        {/* Logo and Description */}
        <div 
          className="flex flex-col"
          style={{ 
            width: '373px',
            height: '175px',
            gap: '15px',
            flex: 'none',
            order: 0,
            flexGrow: 0
          }}
        >
          {/* Logo */}
          <div 
            className="flex items-center"
            style={{ 
              width: '132px',
              height: '40px',
              padding: '0px',
              gap: '10px',
              flex: 'none',
              order: 0,
              flexGrow: 0
            }}
          >
            <div 
              className="rounded-full"
              style={{ 
                width: '40px',
                height: '40px',
                background: '#D3D3D3',
                flex: 'none',
                order: 0,
                flexGrow: 0
              }}
            />
            <span 
              style={{ 
                width: '82px',
                height: '22px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#333333',
                flex: 'none',
                order: 1,
                flexGrow: 0
              }}
            >
              ShopRise
            </span>
          </div>

          {/* Description Text */}
          <div 
            className="flex"
            style={{ 
              width: '373px',
              height: '120px',
              padding: '0px 0px 0px 10px',
              gap: '10px',
              flex: 'none',
              order: 1,
              flexGrow: 0
            }}
          >
            <p 
              style={{ 
                width: '363px',
                height: '120px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#333333',
                flex: 'none',
                order: 0,
                flexGrow: 0
              }}
            >
              ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, unparalleled user experience, and unwavering integrity. As we continue to grow and evolve, our core principle remains unchanged: to empower each user to buy and sell with confidence.
            </p>
          </div>
        </div>

        {/* Sell on ShopRise Button */}
        <button 
          className="flex items-center justify-center"
          style={{ 
            width: '178px',
            height: '39px',
            padding: '10px 25px',
            gap: '10px',
            background: '#1F3A93',
            borderRadius: '25px',
            flex: 'none',
            order: 1,
            flexGrow: 0
          }}
        >
          <span 
            style={{ 
              width: '128px',
              height: '19px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#FFFFFF',
              flex: 'none',
              order: 0,
              flexGrow: 0
            }}
          >
            Sell on ShopRise
          </span>
        </button>
      </div>

      {/* First Navigation Column */}
      <nav 
        className="flex flex-col absolute"
        style={{ 
          width: '70px',
          height: '121px',
          left: '422px',
          top: '33px',
          padding: '0px',
          gap: '15px'
        }}
      >
        <a 
          href="#"
          className="flex items-center justify-center"
          style={{ 
            width: '70px',
            height: '19px',
            padding: '0px',
            gap: '10px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FF7F50',
            flex: 'none',
            order: 0,
            flexGrow: 0
          }}
        >
          All listing
        </a>
        <a 
          href="#"
          className="flex items-center justify-center"
          style={{ 
            width: '68px',
            height: '19px',
            padding: '0px',
            gap: '10px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#333333',
            flex: 'none',
            order: 1,
            flexGrow: 0
          }}
        >
          About us
        </a>
        <a 
          href="#"
          className="flex items-center justify-center"
          style={{ 
            width: '31px',
            height: '19px',
            padding: '0px',
            gap: '10px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#333333',
            flex: 'none',
            order: 2,
            flexGrow: 0
          }}
        >
          FAQ
        </a>
        <a 
          href="#"
          className="flex items-center justify-center"
          style={{ 
            width: '34px',
            height: '19px',
            padding: '0px',
            gap: '10px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#333333',
            flex: 'none',
            order: 3,
            flexGrow: 0
          }}
        >
          Blog
        </a>
      </nav>

      {/* Second Navigation Column */}
      <nav 
        className="flex flex-col absolute"
        style={{ 
          width: '165px',
          height: '87px',
          left: '545px',
          top: '33px',
          padding: '0px',
          gap: '15px'
        }}
      >
        <a 
          href="#"
          className="flex items-center justify-center"
          style={{ 
            width: '105px',
            height: '19px',
            padding: '0px',
            gap: '10px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#333333',
            flex: 'none',
            order: 0,
            flexGrow: 0
          }}
        >
          Privacy Policy
        </a>
        <a 
          href="#"
          className="flex items-center justify-center"
          style={{ 
            width: '165px',
            height: '19px',
            padding: '0px',
            gap: '10px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#333333',
            flex: 'none',
            order: 1,
            flexGrow: 0
          }}
        >
          Terms and Conditions
        </a>
        <a 
          href="#"
          className="flex items-center justify-center"
          style={{ 
            width: '116px',
            height: '19px',
            padding: '0px',
            gap: '10px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#333333',
            flex: 'none',
            order: 2,
            flexGrow: 0
          }}
        >
          Shipping Policy
        </a>
      </nav>

      {/* Newsletter Section */}
      <div 
        className="flex flex-col absolute"
        style={{ 
          width: '436px',
          height: '71px',
          left: '819px',
          top: '33px',
          padding: '0px',
          gap: '10px'
        }}
      >
        <h3 
          style={{ 
            width: '228px',
            height: '22px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '22px',
            color: '#333333',
            flex: 'none',
            order: 0,
            flexGrow: 0
          }}
        >
          Subscribe to our newsletter
        </h3>

        <form 
          onSubmit={handleSubscribe}
          className="flex items-center"
          style={{ 
            width: '436px',
            height: '39px',
            padding: '2px 2px 2px 10px',
            gap: '296px',
            border: '1px solid #D3D3D3',
            borderRadius: '25px',
            boxSizing: 'border-box',
            flex: 'none',
            order: 1,
            flexGrow: 0
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="outline-none bg-transparent"
            style={{ 
              width: '41px',
              height: '19px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              flex: 'none',
              order: 0,
              flexGrow: 0
            }}
          />
          <button 
            type="submit"
            className="flex items-center justify-center"
            style={{ 
              width: '87px',
              height: '35px',
              padding: '8px 10px',
              gap: '10px',
              background: '#FF7F50',
              borderRadius: '20px',
              flex: 'none',
              order: 1,
              flexGrow: 0
            }}
          >
            <span 
              style={{ 
                width: '67px',
                height: '19px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '19px',
                color: '#FFFFFF',
                flex: 'none',
                order: 0,
                flexGrow: 0
              }}
            >
              Subscribe
            </span>
          </button>
        </form>
      </div>

      {/* Social Media Icons */}
      <div 
        className="flex flex-col absolute"
        style={{ 
          width: '30px',
          height: '70px',
          left: '1223px',
          top: 'calc(50% - 70px/2 - 0.5px)',
          padding: '0px',
          gap: '10px'
        }}
      >
        {/* Facebook Icon */}
        <a 
          href="#"
          className="flex items-center"
          style={{ 
            width: '30px',
            height: '30px',
            padding: '0px',
            gap: '10px',
            flex: 'none',
            order: 0,
            flexGrow: 0
          }}
        >
          <svg 
            width="30" 
            height="30" 
            viewBox="0 0 30 30"
            style={{ 
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 1
            }}
          >
            <rect width="30" height="30" fill="#1F3A93"/>
            <path d="M18.75 15.703l.469-3.047h-2.93V10.547c0-.834.409-1.649 1.721-1.649h1.328V6.35s-1.206-.205-2.358-.205c-2.408 0-3.981 1.46-3.981 4.103v2.324h-2.674v3.047h2.674V22h3.29v-6.297h2.461z" fill="white"/>
          </svg>
        </a>

        {/* Instagram Icon */}
        <a 
          href="#"
          className="flex items-center"
          style={{ 
            width: '30px',
            height: '30px',
            padding: '0px',
            gap: '10px',
            flex: 'none',
            order: 1,
            flexGrow: 0
          }}
        >
          <svg 
            width="30" 
            height="30" 
            viewBox="0 0 30 30"
            style={{ 
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 1
            }}
          >
            <rect width="30" height="30" fill="#1F3A93"/>
            <path d="M15 11.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75 1.68-3.75 3.75-3.75zm0 6.188c1.346 0 2.438-1.092 2.438-2.438S16.346 12.562 15 12.562 12.562 13.654 12.562 15s1.092 2.438 2.438 2.438zm4.781-6.344a.875.875 0 11-1.75 0 .875.875 0 011.75 0zM15 9c-1.91 0-5.625-.156-7.227.82-.703.43-1.242.97-1.672 1.672C5.125 12.89 5.125 13.09 5.125 15c0 1.875 0 2.11.977 3.508.43.703.969 1.242 1.671 1.672 1.602.977 5.317.82 7.227.82s5.625.156 7.227-.82c.703-.43 1.242-.969 1.672-1.672.976-1.398.976-1.633.976-3.508 0-1.91 0-2.11-.976-3.508-.43-.703-.97-1.242-1.672-1.672C20.625 8.844 16.91 9 15 9zm0 11.375c-2.031 0-5.859.187-7.617-.977-.664-.43-1.18-.945-1.61-1.61C4.563 16.032 4.75 12.031 4.75 15c0-2.031-.187-5.859.977-7.617.43-.664.945-1.18 1.61-1.61C8.968 4.563 12.97 4.75 15 4.75c2.031 0 5.859-.187 7.617.977.664.43 1.18.945 1.61 1.61 1.21 1.758 1.023 5.586 1.023 7.617 0 2.031.187 5.859-.977 7.617-.43.664-.945 1.18-1.61 1.61-1.758 1.21-5.586 1.023-7.617 1.023z" fill="white"/>
          </svg>
        </a>
      </div>

      {/* Copyright Text */}
      <p 
        className="absolute"
        style={{ 
          width: '447px',
          height: '22px',
          left: '808px',
          top: '244px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '22px',
          textAlign: 'right',
          color: '#000000'
        }}
      >
        © All Right Reserved by | ShopRise | Copyright 2023
      </p>
    </footer>
  );
}