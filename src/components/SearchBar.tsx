export default function SearchBar() {
    return (
      <div className="flex flex-row items-center px-[10px] pr-[2px] py-[2px] gap-[296px] w-[406px] h-[39px] border border-[#D3D3D3] rounded-[25px]">
        {/* Search Icon */}
        <svg 
          className="w-6 h-6 flex-none" 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path 
            d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" 
            fill="#333333"
          />
        </svg>
  
        {/* Search Button */}
        <button className="flex flex-row justify-center items-center px-[10px] py-2 gap-[10px] w-[74px] h-[35px] bg-[#FF7F50] rounded-[20px] hover:bg-[#FF6A3D] transition-colors flex-none">
          <span className="font-medium text-base leading-[19px] text-white">
            Search
          </span>
        </button>
      </div>
    );
  }