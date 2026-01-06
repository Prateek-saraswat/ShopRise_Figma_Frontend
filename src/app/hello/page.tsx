'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: 'John',
    lastName: 'DOE',
    email: 'johndoe@gmail.com',
    password: '•••••••••'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div 
      className="relative bg-gray-50 flex justify-center items-center"
      style={{ 
        width: '1280px', 
        // height: '832px',
        margin: '0 auto'
      }}
    >
      {/* Left Panel - Registration Form */}
      <div 
        className="absolute left-0 top-0 bg-white"
        style={{ 
          width: '442px', 
          height: '832px'
        }}
      >
        {/* Logo */}
        <div 
          className="flex items-center absolute"
          style={{ 
            width: '132px',
            height: '40px',
            left: '25px',
            top: '17px',
            gap: '10px'
          }}
        >
          <div 
            className="rounded-full bg-gray-300"
            style={{ 
              width: '40px', 
              height: '40px'
            }}
          />
          <span 
            className="text-gray-700"
            style={{ 
              width: '82px',
              height: '22px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '22px'
            }}
          >
            ShopRise
          </span>
        </div>

        {/* Form Container */}
        <div 
          className="flex flex-col absolute"
          style={{ 
            width: '330px',
            height: '580px',
            left: 'calc(50% - 165px)',
            top: 'calc(50% - 290px)',
            gap: '25px'
          }}
        >
          {/* Header Section */}
          <div 
            className="flex flex-col items-center"
            style={{ 
              width: '330px',
              height: '516px',
              gap: '15px'
            }}
          >
            {/* Welcome Section */}
            <div 
              className="flex flex-col items-center"
              style={{ 
                width: '208px',
                height: '111px',
                gap: '20px'
              }}
            >
              <div 
                className="flex flex-col items-center"
                style={{ 
                  width: '170px',
                  height: '74px',
                  gap: '15px'
                }}
              >
                {/* User Icon */}
                <svg 
                  style={{ 
                    width: '30px', 
                    height: '30px'
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path 
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" 
                    fill="#1F3A93"
                  />
                </svg>

                {/* Welcome Back Text */}
                <h1 
                  className="text-gray-700"
                  style={{ 
                    width: '200px',
                    height: '29px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '29px',
                    textAlign: 'center'
                  }}
                >
                  Welcome back
                </h1>
              </div>

              {/* Sign in link */}
              <p 
                className="text-gray-700"
                style={{ 
                  width: '208px',
                  height: '17px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '17px',
                  textAlign: 'center'
                }}
              >
                You have account? <a href="/signin" className="text-orange-500">Sign in here</a>
              </p>
            </div>

            {/* Google Sign Up Button */}
            <button 
              type="button"
              className="flex items-center justify-center"
              style={{ 
                width: '330px',
                height: '37px',
                padding: '10px',
                gap: '13px',
                border: '1px solid #D3D3D3',
                borderRadius: '8px',
                boxSizing: 'border-box'
              }}
            >
              <div 
                className="flex items-center"
                style={{ 
                  width: '161px',
                  height: '17px',
                  gap: '10px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path fill="#FFC107" d="M15.5 8.25c0-.45-.04-.89-.12-1.31H8v2.48h4.21c-.18.98-.74 1.81-1.57 2.36v1.97h2.54c1.49-1.37 2.32-3.39 2.32-5.5z"/>
                  <path fill="#FF3D00" d="M8 16c2.43 0 4.47-.81 5.96-2.19l-2.54-1.97c-.68.47-1.58.74-2.63.74-2.02 0-3.73-1.36-4.34-3.19H1.76v2.03C3.18 13.98 5.38 16 8 16z"/>
                  <path fill="#4CAF50" d="M3.66 9.39c-.16-.47-.25-.97-.25-1.48 0-.51.09-1.01.25-1.48V4.4H1.76C1.27 5.36 1 6.41 1 7.5s.27 2.14.76 3.1l1.9-1.21z"/>
                  <path fill="#1976D2" d="M8 3.12c1.14 0 2.16.39 2.97 1.16l2.23-2.23C11.87.85 10.09 0 8 0 5.38 0 3.18 2.02 1.76 4.4l1.9 1.21C4.27 4.48 5.98 3.12 8 3.12z"/>
                </svg>
                <span 
                  className="text-gray-700"
                  style={{ 
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px'
                  }}
                >
                  Sign up with Google
                </span>
              </div>
            </button>

            {/* Divider */}
            <div 
              className="flex items-center"
              style={{ 
                width: '330px',
                height: '22px',
                gap: '10px'
              }}
            >
              <div style={{ width: '146px', height: '0px', border: '1px solid #D3D3D3' }} />
              <span 
                className="text-gray-700"
                style={{ 
                  width: '18px',
                  height: '22px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '22px'
                }}
              >
                or
              </span>
              <div style={{ width: '146px', height: '0px', border: '1px solid #D3D3D3' }} />
            </div>

            {/* Form Fields */}
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col"
              style={{ 
                width: '330px',
                height: '301px',
                gap: '15px'
              }}
            >
              {/* First Name */}
              <div 
                className="flex flex-col"
                style={{ 
                  width: '330px',
                  height: '59px',
                  gap: '5px'
                }}
              >
                <label 
                  className="text-gray-700"
                  style={{ 
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px'
                  }}
                >
                  First name
                </label>
                <div 
                  className="flex items-center"
                  style={{ 
                    width: '330px',
                    height: '37px',
                    padding: '10px',
                    gap: '13px',
                    border: '1px solid #D3D3D3',
                    borderRadius: '8px',
                    boxSizing: 'border-box'
                  }}
                >
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="outline-none w-full text-gray-700"
                    style={{ 
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px'
                    }}
                  />
                </div>
              </div>

              {/* Last Name */}
              <div 
                className="flex flex-col"
                style={{ 
                  width: '330px',
                  height: '59px',
                  gap: '5px'
                }}
              >
                <label 
                  className="text-gray-700"
                  style={{ 
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px'
                  }}
                >
                  Last name
                </label>
                <div 
                  className="flex items-center"
                  style={{ 
                    width: '330px',
                    height: '37px',
                    padding: '10px',
                    gap: '13px',
                    border: '1px solid #D3D3D3',
                    borderRadius: '8px',
                    boxSizing: 'border-box'
                  }}
                >
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="outline-none w-full text-gray-700"
                    style={{ 
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px'
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div 
                className="flex flex-col"
                style={{ 
                  width: '330px',
                  height: '59px',
                  gap: '5px'
                }}
              >
                <label 
                  className="text-gray-700"
                  style={{ 
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px'
                  }}
                >
                  Email
                </label>
                <div 
                  className="flex items-center"
                  style={{ 
                    width: '330px',
                    height: '37px',
                    padding: '10px',
                    gap: '13px',
                    border: '1px solid #D3D3D3',
                    borderRadius: '8px',
                    boxSizing: 'border-box'
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="outline-none w-full text-gray-700"
                    style={{ 
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px'
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div 
                className="flex flex-col"
                style={{ 
                  width: '330px',
                  height: '79px',
                  gap: '5px'
                }}
              >
                <div 
                  className="flex flex-col"
                  style={{ 
                    width: '330px',
                    height: '59px',
                    gap: '5px'
                  }}
                >
                  <label 
                    className="text-gray-700"
                    style={{ 
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px'
                    }}
                  >
                    Password
                  </label>
                  <div 
                    className="flex items-center relative"
                    style={{ 
                      width: '330px',
                      height: '37px',
                      padding: '10px',
                      gap: '13px',
                      border: '1px solid #D3D3D3',
                      borderRadius: '8px',
                      boxSizing: 'border-box'
                    }}
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="outline-none w-full text-gray-700"
                      style={{ 
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '17px'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3"
                      style={{ width: '16px', height: '16px' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14.12 7.88c-1.56-2.96-4.24-4.88-6.12-4.88S3.44 4.92 1.88 7.88a1 1 0 0 0 0 .24c1.56 2.96 4.24 4.88 6.12 4.88s4.56-1.92 6.12-4.88a1 1 0 0 0 0-.24zM8 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#333333"/>
                        <path d="M1.5 1.5l13 13" stroke="#333333" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Indication */}
                <div 
                  className="flex items-center"
                  style={{ 
                    width: '57px',
                    height: '15px'
                  }}
                >
                  <span 
                    style={{ 
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '15px',
                      color: '#1F3A93'
                    }}
                  >
                    Indication
                  </span>
                </div>
              </div>
            </form>
          </div>

          {/* Register Button */}
          <button 
            type="submit"
            className="flex items-center justify-center"
            style={{ 
              width: '330px',
              height: '39px',
              padding: '10px 25px',
              gap: '10px',
              background: '#1F3A93',
              borderRadius: '25px'
            }}
          >
            <span 
              className="text-white"
              style={{ 
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '19px'
              }}
            >
              Register
            </span>
          </button>
        </div>
      </div>

      {/* Right Side - Could be an image or background */}
      <div 
        className="absolute right-0 top-0 bg-gray-100"
        style={{ 
          width: 'calc(1280px - 442px)', 
          height: '832px'
        }}
      >
        <img src="/signup-background.png" alt="" />
        {/* Add background image or pattern here */}
      </div>
    </div>
  );
}