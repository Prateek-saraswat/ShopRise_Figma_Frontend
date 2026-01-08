'use client';

import React, { useState } from 'react';

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'DOE',
    email: 'johndoe@gmail.com',
    phone: '1234466788',
    location: 'Los Angeles,CA',
    zipCode: '',
    address: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-5">
      <div 
        className="bg-white border border-gray-300 rounded-[10px] p-5 flex flex-col items-center gap-[10px]"
        style={{ width: '715px' }}
      >
        {/* Basic Informations Section */}
        <div className="flex flex-col gap-[10px] w-[675px]">
          <div className="px-[10px] py-[5px]">
            <h2 className="text-lg font-medium" style={{ color: '#1F3A93' }}>
              Basic informations
            </h2>
          </div>
          
          <div className="w-full h-0 border-t border-gray-300"></div>
          
          <div className="flex flex-col gap-[10px] pl-[50px]">
            {/* First Name */}
            <div className="flex flex-col gap-[5px] w-[625px]">
              <label className="text-sm font-medium text-gray-800">First name</label>
              <div className="border border-gray-300 rounded-lg px-[10px] py-[10px] h-[37px] flex items-center">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-[5px] w-[625px]">
              <label className="text-sm font-medium text-gray-800">Last name</label>
              <div className="border border-gray-300 rounded-lg px-[10px] py-[10px] h-[37px] flex items-center">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[5px] w-[625px]">
              <label className="text-sm font-medium text-gray-800">Email</label>
              <div className="border border-gray-300 rounded-lg px-[10px] py-[10px] h-[37px] flex items-center">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-[5px] w-[625px]">
              <label className="text-sm font-medium text-gray-800">Phone</label>
              <div className="border border-gray-300 rounded-lg px-[10px] py-[10px] h-[37px] flex items-center">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Reset Password Link */}
            <div className="py-[5px]">
              <a href="#" className="text-base underline" style={{ color: '#1F3A93' }}>
                Reset password
              </a>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex flex-col gap-5 w-[675px]">
          <div className="px-[10px] py-[5px]">
            <h2 className="text-lg font-medium" style={{ color: '#1F3A93' }}>
              Location
            </h2>
          </div>
          
          <div className="w-full h-0 border-t border-gray-300"></div>
          
          <div className="flex flex-col gap-[10px] pl-[50px]">
            {/* Location */}
            <div className="flex flex-col gap-[5px] w-[625px]">
              <label className="text-sm font-medium text-gray-800">Location</label>
              <div className="border border-gray-300 rounded-lg px-[10px] py-[10px] h-[38px] flex items-center gap-[10px]">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1F3A93"/>
                </svg>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Zip Code */}
            <div className="flex flex-col gap-[5px] w-[625px]">
              <label className="text-sm font-medium text-gray-800">Zip Code</label>
              <div className="border border-gray-300 rounded-lg px-[10px] py-[10px] h-[37px] flex items-center">
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Text"
                  className="w-full text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-[5px] w-[625px]">
              <label className="text-sm font-medium text-gray-800">Adresse</label>
              <div className="border border-gray-300 rounded-lg px-[10px] py-[10px] h-[37px] flex items-center">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Text"
                  className="w-full text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Profile Section */}
        <div className="flex flex-col gap-5 w-[675px]">
          <div className="px-[10px] py-[5px]">
            <h2 className="text-lg font-medium" style={{ color: '#1F3A93' }}>
              Social profil
            </h2>
          </div>
          
          <div className="w-full h-0 border-t border-gray-300"></div>
          
          <div className="flex flex-col gap-[10px] pl-[50px]">
            {/* Facebook */}
            <div className="flex flex-col gap-[5px] w-[625px]">
              <label className="text-sm font-medium text-gray-800">Facebook</label>
              <div className="border border-gray-300 rounded-lg px-[10px] py-[10px] h-[37px] flex items-center">
                <input
                  type="text"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  placeholder="Text"
                  className="w-full text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Twitter */}
            <div className="flex flex-col gap-[5px] w-[625px]">
              <label className="text-sm font-medium text-gray-800">Twitter</label>
              <div className="border border-gray-300 rounded-lg px-[10px] py-[10px] h-[37px] flex items-center">
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="Text"
                  className="w-full text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Instagram */}
            <div className="flex flex-col gap-[5px] w-[625px]">
              <label className="text-sm font-medium text-gray-800">Instagram</label>
              <div className="border border-gray-300 rounded-lg px-[10px] py-[10px] h-[37px] flex items-center">
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="Text"
                  className="w-full text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col gap-[5px] w-[625px]">
              <label className="text-sm font-medium text-gray-800">LinkedIn</label>
              <div className="border border-gray-300 rounded-lg px-[10px] py-[10px] h-[37px] flex items-center">
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="Text"
                  className="w-full text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <button 
          className="flex items-center justify-center px-[25px] py-[10px] rounded-[25px] text-white text-base font-medium w-[330px] h-[39px]"
          style={{ backgroundColor: '#1F3A93' }}
        >
          Sell on ShopRise
        </button>
      </div>
    </div>
  );
}