'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your signin logic here
  };

  return (
    // Outer wrapper to apply scaling - makes 100% zoom look like 90% zoom
    <div style={{ 
      transform: 'scale(0.9)', 
      transformOrigin: 'top left',
      width: '111.11%',  // Compensate for scale: 100% / 0.9 = 111.11%
      height: '111.11%'
    }}>
      <div className="flex" style={{ height: '832px' }}>
        {/* Left Side - Sign In Form */}
        <div className="bg-white flex flex-col" style={{ width: '500px', height: '832px' }}>
          {/* Header */}
          <div className="px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <span className="text-xl font-semibold text-gray-900">ShopRise</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-start justify-center px-6 pt-8">
            <div style={{ width: '330px' }}>
              {/* User Icon */}
              <div className="flex justify-center mb-5">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Welcome Text */}
              <h1 className="text-3xl font-bold text-center text-gray-900 mb-3">Welcome back</h1>
              <p className="text-center text-gray-600 mb-7">
                Don't have account?{' '}
                <a href="/signup" className="text-orange-500 hover:text-orange-600 font-medium">
                  Sign up here
                </a>
              </p>

              {/* Google Sign In Button */}
              <button 
                type="button"
                className="w-full bg-white border-2 border-gray-200 rounded-full py-3 px-4 flex items-center justify-center gap-3 hover:border-gray-300 transition-colors mb-5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-700 font-medium">Sign in with Google</span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-gray-400 text-sm">or</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@gmail.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                    />
                    <span className="text-sm text-gray-700">Remember me</span>
                  </label>
                  <a href="forgot-password" className="text-sm text-blue-900 hover:text-blue-800 font-medium">
                    Forgot password
                  </a>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white font-semibold py-3.5 rounded-full hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20 mt-6"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 relative overflow-hidden" style={{ width:"838px" }}>
          {/* Replace this src with your actual image path */}
          <img
            src="/login-right.jpg"
            alt="Shopping Cart"
            className="w-full h-full object-cover"
          />
          
          {/* Optional: Add a subtle overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
          
          {/* 14Hz Logo at bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          </div>
        </div>
      </div>
    </div>
  );
}