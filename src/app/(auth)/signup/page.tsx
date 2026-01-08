'use client'

import { User, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('DOE')
  const [email, setEmail] = useState('johndoe@gmail.com')
  const [password, setPassword] = useState('*********')

  return (
    <div className="min-h-screen flex bg-[#1F3A93]">
      {/* Left Side - Sign Up Form */}
      <div className="w-full lg:w-[442px] bg-white relative flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-[25px] py-[17px]">
          <div className="w-10 h-10 rounded-full bg-[#D3D3D3]" />
          <span className="text-[18px] font-semibold text-[#333333] leading-[22px]">ShopRise</span>
        </div>

        {/* Form Container - Centered */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-[330px] flex flex-col gap-[25px]">
            {/* Header Section */}
            <div className="flex flex-col items-center gap-[15px]">
              {/* Welcome Section */}
              <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center gap-[15px]">
                  {/* User Icon */}
                  <div className="w-[30px] h-[30px] flex items-center justify-center">
                    <User className="w-5 h-5 text-[#1F3A93]" />
                  </div>
                  
                  {/* Welcome Text */}
                  <h1 className="text-[24px] font-semibold text-[#333333] leading-[29px]">Welcome back</h1>
                </div>
                
                {/* Sign In Link */}
                <p className="text-[14px] text-[#333333] leading-[17px]">
                  You have account?{' '}
                  <a href="/login" className="text-[#1F3A93] hover:underline">
                    Sign in here
                  </a>
                </p>
              </div>

              {/* Google Sign Up Button */}
              <button
                className="w-full h-[37px] flex items-center justify-center gap-[13px] border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.68 8.18182C15.68 7.61455 15.6291 7.06909 15.5345 6.54545H8V9.64364H12.3055C12.1164 10.64 11.5491 11.4836 10.6982 12.0509V14.0655H13.2945C14.8073 12.6691 15.68 10.6182 15.68 8.18182Z" fill="#4285F4"/>
                    <path d="M8 16C10.16 16 11.9709 15.2873 13.2945 14.0655L10.6982 12.0509C9.98545 12.5345 9.07636 12.8218 8 12.8218C5.91636 12.8218 4.15273 11.4182 3.52 9.52H0.858182V11.5927C2.17455 14.2036 4.87273 16 8 16Z" fill="#34A853"/>
                    <path d="M3.52 9.52C3.36 9.03636 3.27273 8.52364 3.27273 8C3.27273 7.47636 3.36 6.96364 3.52 6.48V4.40727H0.858182C0.312727 5.49091 0 6.70909 0 8C0 9.29091 0.312727 10.5091 0.858182 11.5927L3.52 9.52Z" fill="#FBBC05"/>
                    <path d="M8 3.18182C9.17818 3.18182 10.2255 3.58545 11.0618 4.37818L13.3527 2.08727C11.9673 0.792727 10.1564 0 8 0C4.87273 0 2.17455 1.79636 0.858182 4.40727L3.52 6.48C4.15273 4.58182 5.91636 3.18182 8 3.18182Z" fill="#EA4335"/>
                  </svg>
                </div>
                <span className="text-[14px] font-medium text-[#333333] leading-[17px]">Sign up with Google</span>
              </button>

              {/* Divider */}
              <div className="w-full flex items-center gap-2.5">
                <div className="flex-1 h-px bg-[#D3D3D3]" />
                <span className="text-[18px] text-[#333333] leading-[22px]">or</span>
                <div className="flex-1 h-px bg-[#D3D3D3]" />
              </div>

              {/* Form Inputs */}
              <div className="w-full flex flex-col gap-[15px]">
                {/* First Name Input */}
                <div className="w-full flex flex-col gap-[5px]">
                  <label className="text-[14px] font-medium text-[#333333] leading-[17px]">First name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-[37px] px-[10px] border border-[#D3D3D3] rounded-lg text-[14px] font-medium text-[#333333] leading-[17px] focus:outline-none focus:ring-2 focus:ring-[#1F3A93] focus:border-transparent"
                  />
                </div>

                {/* Last Name Input */}
                <div className="w-full flex flex-col gap-[5px]">
                  <label className="text-[14px] font-medium text-[#333333] leading-[17px]">Last name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-[37px] px-[10px] border border-[#D3D3D3] rounded-lg text-[14px] font-medium text-[#333333] leading-[17px] focus:outline-none focus:ring-2 focus:ring-[#1F3A93] focus:border-transparent"
                  />
                </div>

                {/* Email Input */}
                <div className="w-full flex flex-col gap-[5px]">
                  <label className="text-[14px] font-medium text-[#333333] leading-[17px]">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[37px] px-[10px] border border-[#D3D3D3] rounded-lg text-[14px] font-medium text-[#333333] leading-[17px] focus:outline-none focus:ring-2 focus:ring-[#1F3A93] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Password Section */}
            <div className="flex flex-col gap-[5px]">
              {/* Password Input */}
              <div className="w-full flex flex-col gap-[5px]">
                <label className="text-[14px] font-medium text-[#333333] leading-[17px]">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[37px] px-[10px] pr-10 border border-[#D3D3D3] rounded-lg text-[14px] font-medium text-[#333333] leading-[17px] focus:outline-none focus:ring-2 focus:ring-[#1F3A93] focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[#333333] hover:text-[#1F3A93] transition-colors"
                  >
                    {showPassword ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Indication Text */}
              <span className="text-[12px] font-medium text-[#1F3A93] leading-[15px]">Indication</span>
            </div>

            {/* Register Button */}
            <a href="/login">
            <button
              className="w-full h-[39px] rounded-[25px] bg-[#1F3A93] text-[16px] font-medium text-white leading-[19px] transition-all hover:opacity-90"
            >
              Register
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div 
        className="hidden lg:block flex-1 relative bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(31, 58, 147, 0.2), rgba(31, 58, 147, 0.2)), url("/signupImg.jpg")',
        }}
      />
    </div>
  )
}

export default SignUpPage
