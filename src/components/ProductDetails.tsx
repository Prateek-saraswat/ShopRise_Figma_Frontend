'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [message, setMessage] = useState('Hello, is this article still available?');

  const productImages = [
    '/product-main.jpg',
    '/product-2.jpg',
    '/product-3.jpg',
    '/product-4.jpg'
  ];

  return (
    <div 
      className="bg-white relative my-10 mx-auto"
      style={{ 
        width: '1280px', 
        height: '100vh',
        // overflowY: 'scroll'
      }}
    >
      <div 
        className="flex absolute"
        style={{ 
          width: '1228px',
          height: '852px',
          left: '25px',
          top: '9px',
          padding: '10px 0px 30px',
          gap: '20px'
        }}
      >
        {/* Left Column - Image Gallery */}
        <div 
          className="flex flex-col items-center"
          style={{ 
            width: '380px', 
            height: '452px',
            gap: '24px'
          }}
        >
          {/* Main Image */}
          <div 
            className="relative"
            style={{ 
              width: '380px', 
              height: '348px',
              borderRadius: '8px',
              overflow: 'hidden'
            }}
          >
            <img
              src={'/product-image.png'}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div 
            className="flex"
            style={{ 
              width: '380px', 
              height: '80px',
              gap: '20px'
            }}
          >
            {productImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="cursor-pointer"
                style={{ 
                  width: '80px', 
                  height: '80px',
                  borderRadius: '8px',
                  border: selectedImage === index ? '2px solid #FF7F50' : '1px solid #D3D3D3',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={'/product-small.png'}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column - Product Details */}
        <div 
          className="flex flex-col"
          style={{ 
            width: '473px', 
            height: '812px',
            padding: '10px',
            gap: '50px'
          }}
        >
          <div 
            className="flex flex-col"
            style={{ 
              width: '453px', 
              height: '702px',
              gap: '20px'
            }}
          >
            {/* Product Info */}
            <div 
              className="flex flex-col"
              style={{ 
                width: '453px', 
                height: '219px',
                gap: '5px'
              }}
            >
              {/* Category */}
              <div 
                className="text-gray-700"
                style={{ 
                  width: '453px', 
                  height: '22px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '22px'
                }}
              >
                Farming Tools & Machinery
              </div>

              {/* Product Details */}
              <div 
                className="flex flex-col"
                style={{ 
                  width: '453px', 
                  height: '192px',
                  gap: '16px'
                }}
              >
                {/* Title and Description */}
                <div 
                  className="flex flex-col"
                  style={{ 
                    width: '453px', 
                    height: '93px',
                    gap: '5px'
                  }}
                >
                  <h1 
                    className="text-orange-500"
                    style={{ 
                      width: '453px', 
                      height: '29px',
                      fontFamily: 'Inter',
                      fontWeight: 600,
                      fontSize: '24px',
                      lineHeight: '29px'
                    }}
                  >
                    Trolley sprayer
                  </h1>

                  <div 
                    className="text-gray-700"
                    style={{ 
                      width: '453px', 
                      height: '18px',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '18px'
                    }}
                  >
                    Description
                  </div>

                  <p 
                    className="text-gray-700"
                    style={{ 
                      width: '453px', 
                      height: '36px',
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '18px'
                    }}
                  >
                    Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.
                  </p>
                </div>

                {/* Time, Location, Favorites */}
                <div 
                  className="flex flex-col"
                  style={{ 
                    width: '248px', 
                    height: '83px',
                    gap: '10px'
                  }}
                >
                  <div 
                    className="flex flex-col"
                    style={{ 
                      width: '248px', 
                      height: '51px',
                      gap: '10px'
                    }}
                  >
                    <div 
                      className="flex"
                      style={{ 
                        width: '248px', 
                        height: '17px',
                        gap: '26px'
                      }}
                    >
                      {/* Time */}
                      <div 
                        className="flex items-center"
                        style={{ 
                          width: '98px', 
                          height: '17px',
                          gap: '5px'
                        }}
                      >
                        <svg className="w-3.5 h-3.5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                        </svg>
                        <span className="text-gray-700 text-sm">3 hours ago</span>
                      </div>

                      {/* Location */}
                      <div 
                        className="flex items-center"
                        style={{ 
                          width: '124px', 
                          height: '17px',
                          gap: '5px'
                        }}
                      >
                        <svg className="w-3.5 h-3.5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        <span className="text-gray-700 text-sm">Los Angeles,CA</span>
                      </div>
                    </div>

                    {/* Add to favorites */}
                    <div 
                      className="flex items-center cursor-pointer"
                      style={{ 
                        width: '136px', 
                        height: '24px',
                        gap: '6px'
                      }}
                    >
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-gray-700 text-sm">Add to favorites</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div 
                  className="flex items-end"
                  style={{ 
                    width: '173px', 
                    height: '22px',
                    gap: '5px'
                  }}
                >
                  <span 
                    className="text-blue-900"
                    style={{ 
                      height: '22px',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '22px'
                    }}
                  >
                    $9.99
                  </span>
                  <span 
                    className="text-gray-700"
                    style={{ 
                      height: '19px',
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                  >
                    (Used like new)
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div 
              className="relative rounded-lg overflow-hidden"
  style={{ 
    width: '453px', 
    height: '222px',
    border: '1px solid #D3D3D3',
    borderRadius: '8px',
    backgroundImage: "url('/map.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                
              </div>
            </div>

            {/* Seller Info */}
            <div 
              className="flex flex-col"
              style={{ 
                width: '309px', 
                height: '78px',
                gap: '5px'
              }}
            >
              <div 
                className="text-gray-700"
                style={{ 
                  width: '38px', 
                  height: '18px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '18px'
                }}
              >
                Seller
              </div>

              <div 
                className="flex"
                style={{ 
                  width: '309px', 
                  height: '55px',
                  gap: '35px'
                }}
              >
                {/* Seller Profile */}
                <div 
                  className="flex items-center"
                  style={{ 
                    width: '169px', 
                    height: '55px',
                    gap: '10px'
                  }}
                >
                  <div 
                    className="rounded-full overflow-hidden"
                    style={{ 
                      width: '55px', 
                      height: '55px',
                      border: '1px solid #1F3A93',
                      background: '#D9D9D9'
                    }}
                  >
                    <img src="/seller.svg" alt="Seller" className="w-full h-full object-cover" />
                  </div>

                  <div 
                    className="flex flex-col"
                    style={{ 
                      width: '104px', 
                      height: '41px',
                      gap: '5px'
                    }}
                  >
                    <div 
                      className="text-gray-700"
                      style={{ 
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '18px'
                      }}
                    >
                      Jennifer Garnet
                    </div>
                    <div 
                      className="text-gray-700"
                      style={{ 
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '18px'
                      }}
                    >
                      Join oct 2023
                    </div>
                  </div>
                </div>

                {/* Rating and Follow */}
                <div 
                  className="flex flex-col items-end"
                  style={{ 
                    width: '105px', 
                    height: '55px',
                    gap: '2px'
                  }}
                >
                  <div 
                    className="flex justify-end items-center"
                    style={{ 
                      width: '105px', 
                      height: '18px',
                      gap: '5px'
                    }}
                  >
                    <div 
                      className="flex"
                      style={{ 
                        width: '78px', 
                        height: '14px',
                        gap: '2px'
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-700 text-xs">(10)</span>
                  </div>

                  <button 
                    className="bg-blue-900 text-white rounded-full flex items-center justify-center"
                    style={{ 
                      width: '87px', 
                      height: '35px',
                      padding: '8px 10px',
                      borderRadius: '20px',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>

            {/* Send Message */}
            <div 
              className="flex flex-col"
              style={{ 
                width: '452px', 
                height: '68px',
                gap: '10px'
              }}
            >
              <div 
                className="text-gray-700"
                style={{ 
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px'
                }}
              >
                Send a message to the seller
              </div>

              <div 
                className="flex items-center rounded-full"
                style={{ 
                  width: '452px', 
                  height: '39px',
                  padding: '2px 2px 2px 10px',
                  gap: '132px',
                  border: '1px solid #D3D3D3',
                  borderRadius: '25px'
                }}
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 outline-none text-gray-700 text-sm"
                  style={{ 
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '17px'
                  }}
                />
                <button 
                  className="bg-blue-900 text-white rounded-full flex items-center justify-center"
                  style={{ 
                    width: '87px', 
                    height: '35px',
                    padding: '8px 10px',
                    borderRadius: '20px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19px'
                  }}
                >
                  Send
                </button>
              </div>
            </div>

            {/* Go to Chat Button */}
            <div 
              className="flex flex-col"
              style={{ 
                width: '452px', 
                height: '35px',
                gap: '10px'
              }}
            >
              <button 
                className="bg-orange-500 text-white rounded-full flex items-center justify-center w-full"
                style={{ 
                  width: '452px', 
                  height: '35px',
                  padding: '8px 10px',
                  borderRadius: '20px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px'
                }}
              >
                Go to chat
              </button>
            </div>
          </div>

          {/* Share Icons */}
          <div 
            className="flex items-center"
            style={{ 
              width: '382.69px', 
              height: '40px',
              gap: '25px'
            }}
          >
            <div 
              className="flex items-center"
              style={{ 
                width: '58px', 
                height: '17px',
                gap: '5px'
              }}
            >
              <svg className="w-3.5 h-3.5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
              <span className="text-gray-700 text-sm">Share</span>
            </div>

            {/* WhatsApp */}
            <div style={{ width: '40px', height: '40px' }}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect width="40" height="40" rx="20" fill="#25D366"/>
                <path d="M20 10c-5.52 0-10 4.48-10 10 0 1.72.44 3.34 1.21 4.75L10 30l5.38-1.18A9.96 9.96 0 0020 30c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.85 14.23c-.24.68-1.39 1.24-1.92 1.32-.51.08-1.14.12-1.84-.12-.43-.14-.98-.33-1.69-.65-2.97-1.32-4.91-4.31-5.06-4.51-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.28-.3.61-.37.81-.37.2 0 .39.01.57.01.18 0 .43-.07.67.51.24.59.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.38-.42.51-.14.14-.29.29-.12.57.17.28.76 1.25 1.63 2.03 1.12.99 2.06 1.3 2.35 1.45.28.14.45.12.62-.07.17-.19.72-.84.91-1.13.19-.28.39-.24.65-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z" fill="white"/>
              </svg>
            </div>

            {/* Facebook */}
            <div style={{ width: '40px', height: '40px' }}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect width="40" height="40" rx="20" fill="#1877F2"/>
                <path d="M25 20.94l.6-3.94h-3.78V14c0-1.08.53-2.13 2.22-2.13h1.72V8.43s-1.56-.27-3.05-.27c-3.11 0-5.15 1.89-5.15 5.31V17H14v3.94h3.56V30h4.38V20.94H25z" fill="white"/>
              </svg>
            </div>

            {/* Twitter */}
            <div style={{ width: '40px', height: '40px' }}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect width="40" height="40" rx="20" fill="#000000"/>
                <path d="M24.18 13h3.14l-6.86 7.84L28 27h-6.32l-4.95-6.47L11.28 27H8.14l7.34-8.39L9 13h6.48l4.47 5.91L24.18 13zm-1.1 12.6h1.74L15.96 14.79h-1.87l8.99 10.81z" fill="white"/>
              </svg>
            </div>

            {/* Messenger */}
            <div style={{ width: '40px', height: '40px' }}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <defs>
                  <radialGradient id="messenger" cx="19.247%" cy="99.465%" r="108.96%">
                    <stop offset="0%" stopColor="#0099FF"/>
                    <stop offset="60.97%" stopColor="#A033FF"/>
                    <stop offset="93.48%" stopColor="#FF5280"/>
                    <stop offset="100%" stopColor="#FF7061"/>
                  </radialGradient>
                </defs>
                <rect width="40" height="40" rx="20" fill="url(#messenger)"/>
                <path d="M20 10c-5.52 0-10 4.26-10 9.52 0 2.99 1.49 5.65 3.82 7.39V30l3.02-1.66c.81.22 1.66.34 2.54.34 5.52 0 10-4.26 10-9.52S25.52 10 20 10zm1.01 12.82l-2.57-2.74-5.01 2.74 5.51-5.84 2.63 2.74 4.95-2.74-5.51 5.84z" fill="white"/>
              </svg>
            </div>

            {/* Telegram */}
            <div style={{ width: '40px', height: '40px' }}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect width="40" height="40" rx="20" fill="#03B1FC"/>
                <path d="M28.92 12.45c.18-.73-.71-1.34-1.34-1.02l-17.63 7.29c-.58.24-.58 1.09 0 1.33l4.39 1.76 10.17-6.5c.21-.14.42.18.24.35l-8.22 7.86-.31.3v3.82c0 .52.63.78 1 .4l2.44-2.54 4.8 3.64c.42.32 1.01.08 1.13-.46l3.33-15.23z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column - Checkout */}
        <div 
          className="flex flex-col items-center rounded-lg"
          style={{ 
            width: '335px', 
            height: '378px',
            padding: '20px',
            gap: '25px',
            border: '1px solid #D3D3D3',
            borderRadius: '10px'
          }}
        >
          {/* Checkout Title */}
          <div 
            className="text-gray-700 text-center"
            style={{ 
              width: '85px', 
              height: '22px',
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '22px'
            }}
          >
            Checkout
          </div>

          {/* Price Details */}
          <div 
            className="flex flex-col"
            style={{ 
              width: '295px', 
              height: '236px',
              gap: '20px'
            }}
          >
            <div 
              className="flex flex-col"
              style={{ 
                width: '295px', 
                height: '128px',
                gap: '20px'
              }}
            >
              <div 
                className="flex flex-col"
                style={{ 
                  width: '295px', 
                  height: '84px',
                  gap: '20px'
                }}
              >
                {/* Price */}
                <div 
                  className="flex items-center justify-between"
                  style={{ 
                    width: '295px', 
                    height: '22px'
                  }}
                >
                  <span 
                    className="text-gray-700"
                    style={{ 
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                  >
                    Price
                  </span>
                  <span 
                    className="text-blue-900"
                    style={{ 
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '22px'
                    }}
                  >
                    $9.99
                  </span>
                </div>

                {/* Delivery Fee */}
                <div 
                  className="flex items-center justify-between"
                  style={{ 
                    width: '295px', 
                    height: '22px'
                  }}
                >
                  <span 
                    className="text-gray-700"
                    style={{ 
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                  >
                    Delivery fee
                  </span>
                  <span 
                    className="text-blue-900"
                    style={{ 
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '22px'
                    }}
                  >
                    $13.50
                  </span>
                </div>

                {/* Divider */}
                <div 
                  style={{ 
                    width: '295px', 
                    height: '0px',
                    border: '1px dashed #D3D3D3'
                  }}
                />
              </div>

              {/* Total */}
              <div 
                className="text-gray-700 text-right"
                style={{ 
                  width: '295px', 
                  height: '24px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '24px'
                }}
              >
                $22.49
              </div>
            </div>

            {/* Buttons */}
            <div 
              className="flex flex-col"
              style={{ 
                width: '295px', 
                height: '88px',
                gap: '10px'
              }}
            >
              <div 
                className="flex"
                style={{ 
                  width: '295px', 
                  height: '39px',
                  gap: '15px'
                }}
              >
                <button 
                  className="flex items-center justify-center rounded-full"
                  style={{ 
                    width: '140px', 
                    height: '39px',
                    padding: '10px 25px',
                    border: '1px solid #FF7F50',
                    borderRadius: '25px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19px',
                    color: '#FF7F50'
                  }}
                >
                  Buy now
                </button>

                <button 
                  className="flex items-center justify-center rounded-full text-white"
                  style={{ 
                    width: '140px', 
                    height: '39px',
                    padding: '10px 25px',
                    background: 'rgba(51, 51, 51, 0.5)',
                    borderRadius: '25px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19px'
                  }}
                >
                  Make offer
                </button>
              </div>

              <button 
                className="flex items-center justify-center rounded-full text-white w-full"
                style={{ 
                  width: '295px', 
                  height: '39px',
                  padding: '10px 25px',
                  background: '#1F3A93',
                  borderRadius: '25px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px'
                }}
              >
                Paypal checkout
              </button>
            </div>
          </div>

          {/* Terms */}
          <p 
            className="text-gray-700 text-center"
            style={{ 
              width: '295px', 
              height: '30px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '15px'
            }}
          >
            By continuing to checkout, you agree to the Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}