export default function UserProfileHeader() {
    return (
      <div className=" cursor-pointer flex flex-row items-center gap-5 w-[181px] h-[35px]">
        {/* Icons Section */}
        <div className="flex flex-row items-center gap-[10px] w-[46px] h-[18px]">
          {/* Mail Icon */}
          <svg 
            className="w-[18px] h-[18px] flex-none" 
            viewBox="0 0 18 18" 
            fill="none"
          >
            <path 
              d="M1.5 3.75L9 9.75L16.5 3.75M1.5 3V15H16.5V3H1.5Z" 
              stroke="#333333" 
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
  
          {/* Alert/Notification Icon */}
          <svg 
            className="w-[18px] h-[18px] flex-none" 
            viewBox="0 0 18 18" 
            fill="none"
          >
            <path 
              d="M9 1.5C9 1.5 7.5 3 7.5 6V9.75L6 11.25H12L10.5 9.75V6C10.5 3 9 1.5 9 1.5Z" 
              stroke="#333333" 
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path 
              d="M7.5 11.25V12C7.5 12.8284 8.17157 13.5 9 13.5C9.82843 13.5 10.5 12.8284 10.5 12V11.25" 
              stroke="#333333" 
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
  
        {/* User Profile Section */} 
        <a href="/admin">
        <div className="flex flex-row items-center gap-[5px] w-[115px] h-[35px]">
          {/* User Name */}
          <span className="font-normal text-base leading-[19px] text-[#333333] w-[75px]">
            John DOE
          </span>
  
          {/* Profile Picture */}
          <div className="w-[35px] h-[35px] rounded-full border border-[#FF7F50] overflow-hidden bg-gray-300">
            <img 
              src="/profil.svg" 
              alt="John DOE Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </a>
      </div>
    );
  }