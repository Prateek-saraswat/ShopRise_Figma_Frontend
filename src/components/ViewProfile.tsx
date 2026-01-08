export default function ViewProfileModal() {
    return (
      <div className="flex flex-col items-start p-5 gap-[30px] relative w-[510px] h-[673px] bg-white border border-[#D3D3D3] rounded-[10px]">
        {/* Header Background with Profile Info */}
        <div 
          className="flex flex-col items-start gap-[10px] w-[470px] h-[220px] rounded-[10px] bg-cover bg-center"
          style={{
            background: 'linear-gradient(0deg, rgba(255, 127, 80, 0.05), rgba(255, 127, 80, 0.05)), url(/api/placeholder/470/220)',
            backgroundSize: 'cover'
          }}
        >
          {/* Profile Info Section */}
          <div className="flex flex-row items-start gap-[111px] w-[470px] h-[95px] mt-auto">
            {/* User Info */}
            <div className="flex flex-row items-center gap-[25px] w-[254px] h-[95px]">
              {/* Profile Picture */}
              <div className="flex items-end w-[95px] h-[95px]">
                <div className="w-[95px] h-[95px] rounded-full border border-[#FF7F50] overflow-hidden bg-gray-300">
                  <img 
                    src="/api/placeholder/95/95" 
                    alt="John DOE Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
  
              {/* User Details */}
              <div className="flex flex-col items-start gap-[5px] w-[134px]">
                <span className="font-medium text-base leading-[19px] text-[#333333]">
                  John DOE
                </span>
                <span className="font-normal text-sm leading-[17px] text-[#333333]">
                  johndoe@gmail.com
                </span>
                <span className="font-medium text-[10px] leading-[18px] text-[#333333]">
                  Join oct 2023
                </span>
              </div>
            </div>
  
            {/* Seller Rating */}
            <div className="flex flex-col items-start gap-[10px] w-[105px]">
              <span className="font-medium text-base leading-[19px] text-[#333333]">
                Seller rating
              </span>
              <div className="flex flex-row items-center gap-[5px] w-[105px]">
                {/* Stars */}
                <div className="flex flex-row gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="#FF7F50">
                      <path d="M7 0L8.5625 4.8125L13.75 5.625L10.375 9.0625L11.125 14L7 11.375L2.875 14L3.625 9.0625L0.25 5.625L5.4375 4.8125L7 0Z"/>
                    </svg>
                  ))}
                </div>
                {/* Rating Count */}
                <span className="font-normal text-xs leading-[18px] text-[#333333]">
                  (10)
                </span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Location Section */}
        <div className="flex flex-col items-start gap-[10px] w-[470px]">
          {/* Location Title */}
          <div className="flex flex-row items-start py-[5px] gap-[10px] w-[58px]">
            <span className="font-medium text-sm leading-[17px] text-[#1F3A93]">
              Location
            </span>
          </div>
  
          {/* Divider */}
          <div className="w-[470px] border-t border-[#D3D3D3]"></div>
  
          {/* Location Details */}
          <div className="flex flex-col items-start pl-[50px] gap-[10px] w-[470px]">
            {/* Location Row */}
            <div className="flex flex-row items-center py-[5px] gap-[13px] w-[420px] rounded-lg">
              <span className="font-medium text-base leading-[19px] text-[#333333] w-[137px]">
                Location :
              </span>
              <span className="font-medium text-base leading-[19px] text-[#333333] w-[137px]">
                Los angeles, CA
              </span>
            </div>
  
            {/* Zip Code Row */}
            <div className="flex flex-row items-center py-[5px] gap-[13px] w-[420px] rounded-lg">
              <span className="font-medium text-base leading-[19px] text-[#333333] w-[137px]">
                Zip Code :
              </span>
              <span className="font-medium text-base leading-[19px] text-[#333333] w-[137px]">
                .
              </span>
            </div>
  
            {/* Address Row */}
            <div className="flex flex-row items-center py-[5px] gap-[13px] w-[420px] rounded-lg">
              <span className="font-medium text-base leading-[19px] text-[#333333] w-[137px]">
                Adress :
              </span>
              <span className="font-medium text-base leading-[19px] text-[#333333] w-[137px]">
                .
              </span>
            </div>
          </div>
        </div>
  
        {/* Social Profile Section */}
        <div className="flex flex-col justify-center items-start gap-[15px] w-[299.69px]">
          {/* Social Profile Title */}
          <div className="flex flex-row items-center gap-[5px] w-[100px]">
            <span className="font-medium text-base leading-[19px] text-[#1F3A93]">
              Social Profile
            </span>
          </div>
  
          {/* Social Icons */}
          <div className="flex flex-row items-center gap-[25px] w-[299.69px] h-10">
            {/* WhatsApp */}
            <div className="flex flex-col justify-center items-center w-[39.69px] h-10">
              <svg className="w-[39.69px] h-10" viewBox="0 0 40 40" fill="none">
                <path d="M0 40L2.8 29.6C1.08 26.68 0.16 23.4 0.16 19.96C0.16 8.96 9.12 0 20.12 0C25.48 0 30.52 2.08 34.36 5.92C38.2 9.76 40.28 14.8 40.28 20.16C40.28 31.16 31.32 40.12 20.32 40.12C17 40.12 13.72 39.28 10.76 37.68L0 40Z" fill="#1FAF38"/>
                <path d="M0.4 39.6L2.88 30.32C1.24 27.48 0.36 24.28 0.36 20.92C0.36 10.04 9.24 1.16 20.12 1.16C25.32 1.16 30.2 3.16 33.92 6.88C37.64 10.6 39.64 15.48 39.64 20.68C39.64 31.56 30.76 40.44 19.88 40.44C16.68 40.44 13.52 39.64 10.68 38.12L0.4 39.6Z" fill="url(#whatsapp-gradient)"/>
                <path d="M20.08 35.96C27.56 35.96 33.64 29.88 33.64 22.4C33.64 14.92 27.56 8.84 20.08 8.84C12.6 8.84 6.52 14.92 6.52 22.4C6.52 24.92 7.24 27.28 8.48 29.28L6.96 34.48L12.32 32.96C14.24 34.08 16.44 34.72 18.76 34.84" fill="#FFFFFF"/>
                <defs>
                  <linearGradient id="whatsapp-gradient" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#60D669"/>
                    <stop offset="1" stopColor="#1FAF38"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
  
            {/* Facebook */}
            <div className="flex flex-col justify-center items-center w-10 h-10">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#1877F2"/>
                <path d="M27.8 25.5L28.5 20.5H23.8V17.3C23.8 15.8 24.5 14.3 26.9 14.3H28.7V10C28.7 10 26.5 9.7 24.4 9.7C20 9.7 17 12.4 17 16.6V20.5H12.7V25.5H17V39.7C17.9 39.9 18.9 40 19.9 40C20.9 40 21.9 39.9 22.8 39.7V25.5H27.8Z" fill="white"/>
              </svg>
            </div>
  
            {/* X (Twitter) */}
            <div className="flex flex-col justify-center items-center w-10 h-10">
              <div className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </div>
  
            {/* Messenger */}
            <div className="flex flex-col justify-center items-center w-10 h-10">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="url(#messenger-gradient)"/>
                <path d="M20 7C12.8 7 7 12.4 7 19.2C7 22.8 8.6 26 11.2 28.2V33L15.8 30.4C17.1 30.8 18.5 31 20 31C27.2 31 33 25.6 33 18.8C33 12 27.2 7 20 7ZM21.2 22.4L18.2 19.2L12.4 22.4L18.8 15.6L21.8 18.8L27.6 15.6L21.2 22.4Z" fill="white"/>
                <defs>
                  <radialGradient id="messenger-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 40) rotate(-90) scale(40)">
                    <stop stopColor="#0099FF"/>
                    <stop offset="0.6097" stopColor="#A033FF"/>
                    <stop offset="0.9348" stopColor="#FF5280"/>
                    <stop offset="1" stopColor="#FF7061"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
  
            {/* Email/Message */}
            <div className="flex flex-col justify-center items-center w-10 h-10">
              <div className="w-10 h-10 bg-[#03B1FC] rounded-[24px] flex items-center justify-center">
                <svg className="w-[28px] h-[22px]" viewBox="0 0 28 22" fill="none">
                  <path d="M25 0H3C1.35 0 0.015 1.35 0.015 3L0 19C0 20.65 1.35 22 3 22H25C26.65 22 28 20.65 28 19V3C28 1.35 26.65 0 25 0ZM25 5L14 12L3 5V3L14 10L25 3V5Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }