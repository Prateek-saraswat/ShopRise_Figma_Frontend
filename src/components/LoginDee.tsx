import React from 'react';

const LoginD = () => {
  return (
    <div className="relative w-[1280px] h-[832px] bg-[#1F3A93]">
      {/* Right side with background image */}
      <div className="absolute w-[838px] h-[832px] left-[442px] top-0 bg-gradient-to-b from-[rgba(31,58,147,0.2)] to-[rgba(31,58,147,0.2)] bg-cover bg-center">
        {/* This would have a background image in practice */}
      </div>

      {/* Left side login form */}
      <div className="absolute w-[442px] h-[832px] left-0 top-0 bg-white">
        {/* Logo */}
        <div className="absolute flex items-center gap-[10px] left-[25px] top-[17px]">
          <div className="w-[40px] h-[40px] bg-[#D3D3D3] rounded-full"></div>
          <span className="font-['Inter'] font-semibold text-[18px] leading-[22px] text-[#333333]">
            ShopRise
          </span>
        </div>

        {/* Login Form */}
        <div className="absolute w-[330px] h-[440px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col gap-[25px]">
          {/* Login Header */}
          <div className="w-[330px] h-[376px] flex flex-col items-center gap-[15px]">
            <div className="w-[223px] h-[111px] flex flex-col items-center gap-[20px]">
              <div className="w-[170px] h-[74px] flex flex-col items-center gap-[15px]">
                <div className="relative w-[30px] h-[30px]">
                  <div className="absolute left-[16.67%] right-[16.67%] top-[16.67%] bottom-[16.67%] bg-[#1F3A93]"></div>
                </div>
                <h2 className="w-[170px] h-[29px] font-['Inter'] font-semibold text-[24px] leading-[29px] text-center text-[#333333]">
                  Welcome back
                </h2>
              </div>
              <p className="w-[223px] h-[17px] font-['Inter'] font-normal text-[14px] leading-[17px] text-center text-[#333333]">
                Don't have account? Sign up here
              </p>
            </div>

            {/* Google Sign In Button */}
            <div className="box-border w-[330px] h-[37px] border border-[#D3D3D3] rounded-[8px] flex justify-center items-center gap-[13px]">
              <div className="flex items-center gap-[10px]">
                <div className="relative w-[16px] h-[16px]">
                  <div className="absolute left-[8.33%] right-[8.33%] top-[8.33%] bottom-[8.33%] bg-[#FFC107]"></div>
                  <div className="absolute left-[13.14%] right-[21.63%] top-[8.33%] bottom-[59.35%] bg-[#FF3D00]"></div>
                  <div className="absolute left-[12.91%] right-[22.06%] top-[58.45%] bottom-[8.33%] bg-[#4CAF50]"></div>
                  <div className="absolute left-[50%] right-[8.33%] top-[41.67%] bottom-[19.11%] bg-[#1976D2]"></div>
                </div>
                <span className="font-['Inter'] font-medium text-[14px] leading-[17px] text-[#333333]">
                  Sign in with Google
                </span>
              </div>
            </div>

            {/* OR Separator */}
            <div className="w-[330px] h-[22px] flex items-center gap-[10px]">
              <div className="w-[146px] h-0 border border-[#D3D3D3]"></div>
              <span className="w-[18px] h-[22px] font-['Inter'] font-normal text-[18px] leading-[22px] text-center text-[#333333]">
                or
              </span>
              <div className="w-[146px] h-0 border border-[#D3D3D3]"></div>
            </div>

            {/* Email Input */}
            <div className="w-[330px] h-[59px] flex flex-col items-start gap-[5px]">
              <label className="font-['Inter'] font-medium text-[14px] leading-[17px] text-[#333333]">
                Email
              </label>
              <div className="box-border w-[330px] h-[37px] border border-[#D3D3D3] rounded-[8px] flex items-center gap-[13px] px-[10px]">
                <div className="flex items-center gap-[10px]">
                  <span className="font-['Inter'] font-medium text-[14px] leading-[17px] text-[#333333]">
                    johndoe@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="w-[330px] h-[87px] flex flex-col items-start gap-[10px]">
              <div className="w-[330px] h-[59px] flex flex-col items-start gap-[5px]">
                <label className="font-['Inter'] font-medium text-[14px] leading-[17px] text-[#333333]">
                  Password
                </label>
                <div className="relative box-border w-[330px] h-[37px] border border-[#D3D3D3] rounded-[8px] flex items-center gap-[13px] px-[10px] isolate">
                  <div className="flex items-center gap-[10px] z-0">
                    <span className="font-['Inter'] font-medium text-[14px] leading-[17px] text-[#333333]">
                      *********
                    </span>
                  </div>
                  {/* Eye icon */}
                  <div className="absolute w-[16px] h-[16px] left-[297px] top-1/2 -translate-y-1/2 z-10">
                    <div className="absolute left-[3.13%] right-[32.66%] top-[15.62%] bottom-[29.66%] bg-[#333333]"></div>
                    <div className="absolute left-[6.25%] right-[3.13%] top-[6.25%] bottom-[6.25%] bg-[#333333]"></div>
                  </div>
                </div>
              </div>

              {/* Remember me and Forgot password */}
              <div className="w-[330px] h-[18px] flex items-center justify-between">
                <div className="flex items-center gap-[14px]">
                  <div className="relative w-[18px] h-[18px]">
                    <div className="absolute inset-0 bg-[#D9D9D9] rounded-[3px]"></div>
                  </div>
                  <span className="font-['Inter'] font-normal text-[14px] leading-[17px] text-[#333333]">
                    Remember me
                  </span>
                </div>
                <a href="#" className="font-['Inter'] font-medium text-[14px] leading-[17px] text-[#1F3A93] underline">
                  Forgot password
                </a>
              </div>
            </div>
          </div>

          {/* Sign In Button */}
          <button className="w-[330px] h-[39px] bg-[#1F3A93] rounded-[25px] flex justify-center items-center">
            <span className="font-['Inter'] font-medium text-[16px] leading-[19px] text-white">
              Sign In
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginD;