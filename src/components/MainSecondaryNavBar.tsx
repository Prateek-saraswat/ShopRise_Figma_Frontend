'use client'
import { Search, ChevronDown, MapPin, List, X } from 'lucide-react';
import { useState } from 'react';
import SearchBar from './SearchBar';

export default function MainSecondaryNavBar() {
  const [selectedSort, setSelectedSort] = useState('Less viewed');
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [activeFilters, setActiveFilters] = useState([
    'Ready to ship',
    'Antiques & Collectibles',
    'Auto Parts',
    'Books, Movies & Music',
    'Electronics',
    'Furniture',
    'Home Improvement & Tools'
  ]);

  const categories = [
    "Antiques & Collectibles",
    "Appliance",
    "Arts & Crafts",
    "Auto Parts",
    "Baby",
    "Books, Movies & Music",
    "Home Improvement & Tools",
    "Kidswear & Baby",
    "Luggage & Bags",
    "Menswear",
    "Miscellaneous",
    "Musical instruments",
    "Patio & Garden",
    "Pet Supplies",
    "Rentals",
   
  
  ];

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  const handleCategoryClick = (category) => {
    if (!activeFilters.includes(category)) {
      setActiveFilters([...activeFilters, category]);
    }
    setShowCategories(false);
  };

  return (
    <header className="w-full bg-white">
      {/* Secondary Navigation & Search */}
      <div className="px-6 py-4 border-b border-[#D3D3D3]">
        <div className="max-w-[1280px] mx-auto">
          {/* Categories & Quick Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              {/* Categories Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center gap-1.5 hover:text-[#FF7F50] transition-colors"
                  onClick={() => setShowCategories(!showCategories)}
                >
                  <List className="w-5 h-5 text-[#333333]" />
                  <span className="text-base font-medium text-[#333333]">Categories</span>
                  <ChevronDown className="w-2.5 h-2.5 text-[#333333]" />
                </button>

                {/* Categories Dropdown Menu */}
                {showCategories && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowCategories(false)}
                    />
                    <div className="absolute left-0 top-full mt-2 z-20 flex flex-col items-start py-[10px] overflow-hidden gap-[5px] w-[229px] max-h-[815px] bg-white border border-[#D3D3D3] shadow-[0px_1px_20px_rgba(0,0,0,0.25)] rounded-[10px] overflow-y-auto">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="flex flex-row justify-center items-center py-[5px] px-[10px] pl-[15px] gap-[10px] w-[299px] min-h-[27px] bg-white hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => handleCategoryClick(category)}
                        >
                          <span className="font-normal text-sm leading-[17px] text-black w-[274px]">
                            {category}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-[#333333]" />

              {/* Quick Links */}
              <div className="hidden lg:flex items-center gap-4">
                <a href="#" className="text-base text-[#333333] hover:text-[#FF7F50] transition-colors">
                  For you
                </a>
                <a href="#" className="text-base text-[#333333] hover:text-[#FF7F50] transition-colors">
                  Local
                </a>
                <a href="#" className="text-base text-[#333333] hover:text-[#FF7F50] transition-colors">
                  Selling
                </a>
                <a href="#" className="text-base text-[#333333] hover:text-[#FF7F50] transition-colors">
                  Buying
                </a>
                <button 
                  className="flex items-center gap-0.5 text-base text-[#333333] hover:text-[#FF7F50] transition-colors relative"
                  onClick={() => setShowMoreMenu(!showMoreMenu)}
                >
                  <span>More</span>
                  <ChevronDown className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>

            {/* Search Bar */}
            {/* <div className="flex items-center gap-0.5 border border-[#D3D3D3] rounded-full px-2.5 py-0.5 w-full md:w-auto md:min-w-[406px]">
              <Search className="w-6 h-6 text-[#333333] flex-shrink-0" />
              <input
                type="text"
                placeholder=""
                className="flex-1 px-2 text-base outline-none bg-transparent"
              />
              <button className="flex items-center justify-center px-2.5 py-2 bg-[#FF7F50] text-white text-base font-medium rounded-full hover:bg-[#FF6A3D] transition-colors flex-shrink-0">
                Search
              </button>
            </div> */}
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Filters & Sort Bar */}
      <div className="px-6 py-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            {/* Sort By */}
            <div className="flex items-center gap-2.5">
              <span className="text-base font-medium text-[#333333]">Sort by:</span>
              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="appearance-none border border-[#D3D3D3] rounded-md px-2.5 py-2.5 pr-8 text-base text-[#333333] cursor-pointer hover:border-[#1F3A93] focus:outline-none focus:border-[#1F3A93] transition-colors"
                >
                  <option>Less viewed</option>
                  <option>Most viewed</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <ChevronDown className="w-2.5 h-2.5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#333333]" />
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 text-[#1F3A93]">
              <MapPin className="w-[18px] h-[18px]" />
              <span className="text-lg font-medium">Los Angeles,CA</span>
              <span className="text-lg">-</span>
              <span className="text-lg">10 miles</span>
              <ChevronDown className="w-2.5 h-2.5 ml-1" />
            </div>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex items-center gap-5 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex items-center gap-2.5 flex-shrink-0 flex-wrap">
                {activeFilters.map((filter, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-2.5 border border-[#D3D3D3] rounded-full bg-white hover:border-[#FF7F50] transition-colors group"
                  >
                    <span className={`text-sm font-medium whitespace-nowrap ${
                      index === 0 ? 'text-[#333333]' : 'text-black'
                    }`}>
                      {filter}
                    </span>
                    <button
                      onClick={() => removeFilter(filter)}
                      className="flex-shrink-0 hover:bg-[#FF7F50] hover:text-white rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={clearAllFilters}
                className="text-base font-semibold text-[#FF7F50] hover:text-[#FF6A3D] transition-colors whitespace-nowrap flex-shrink-0"
              >
                Clear all categorie
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}