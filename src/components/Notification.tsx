'use client';

import React, { useState } from 'react';

// --- Mock Data ---
const TAGS = [
  { id: 1, label: "Ready to ship" },
  { id: 2, label: "Near me" },
  { id: 3, label: "Furniture" },
  { id: 4, label: "Electronics" },
  { id: 5, label: "Fashion" },
  { id: 6, label: "Home Decor" },
  { id: 7, label: "Outdoor" },
  { id: 8, label: "Books" },
];
type Notification = {
    id: number;
    title: string;
    message: string;
    time: string;
    read: boolean;
  };

const PRODUCT_COUNT = 36; // Based on Frame 18 to Frame 75 range roughly
const NOTIFICATIONS = Array(6).fill(null).map((_, i) => ({
  id: i,
  title: "Update regarding your purchase",
  message: "Your order #4592 has been shipped and is on its way!",
  time: "1 hour ago",
  read: i > 1 // First 2 unread
}));

type IconProps = React.SVGProps<SVGSVGElement> & {
    d: string;
  };
// --- Components ---

const Icon = ({ path, d, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d={d} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

const ProductCard = () => (
  <div className="flex flex-row items-start p-[10px] gap-[10px] w-[190px] h-[207px] border border-[#D3D3D3] rounded-[10px] shrink-0">
    <div className="flex flex-col items-center gap-[11px] w-[170px] h-[187px]">
      <div className="relative w-[170px] h-[125px] bg-gray-200 rounded-[10px]">
        <img 
          src={`https://picsum.photos/seed/${Math.random()}/170/125`} 
          alt="Product" 
          className="w-full h-full object-cover rounded-[10px]"
        />
        {/* Heart Icon absolute */}
        <div className="absolute top-[8px] right-[8px] w-[24px] h-[24px] rounded-full flex items-center justify-center">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[2px] w-[170px]">
        <h3 className="w-[170px] text-[14px] font-medium leading-[17px] text-[#FF7F50]">Name of product</h3>
        <div className="flex items-end gap-[5px]">
          <span className="text-[12px] font-medium leading-[15px] text-[#1F3A93]">$9.99</span>
          <span className="text-[11px] font-normal leading-[13px] text-[#333333]">(Used)</span>
        </div>
        <div className="w-[90px] text-[12px] font-normal leading-[15px] text-[#333333]">Los Angeles.CA</div>
      </div>
    </div>
  </div>
);

const NotificationItem = ({ item, onRead }: { item: Notification, onRead: () => void }) => (
  <div className={`flex flex-col items-center p-[10px_0px_0px] gap-[5px] w-[342px] ${item.read ? 'h-[101px]' : 'h-[118px]'}`}>
    <div className="flex flex-col items-end gap-[5px] w-[312px]">
      <div className="w-[312px] text-[14px] font-semibold leading-[17px] text-[#1F3A93]">{item.title}</div>
      <div className="w-[302px] text-[14px] font-normal leading-[17px] text-[#333333]">{item.message}</div>
    </div>
    <div className="flex flex-col items-center gap-[15px] w-[342px] h-[30px]">
      <div className="flex flex-row items-start justify-between w-[312px] h-[15px]">
        <span className="text-[12px] font-normal leading-[15px] text-[#333333]">{item.time}</span>
        <div className="flex items-center gap-[5px]">
            {!item.read && <div className="w-[5px] h-[5px] rounded-full bg-[#1F3A93]" />}
            <span className="text-[12px] font-normal leading-[15px] text-right text-[#1F3A93]">{item.read ? 'Read' : 'Unread'}</span>
        </div>
      </div>
      <div className="w-[342px] h-[0px] border border-[#D3D3D3]"></div>
    </div>
  </div>
);

export default function HomeAfterConnect() {
  const [filterTags, setFilterTags] = useState<typeof TAGS>(TAGS);
  const [notifications, setNotifications] = useState<Notification[]>(NOTIFICATIONS);

  const removeTag = (id: number) => {
    setFilterTags(filterTags.filter(t => t.id !== id));
  };

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({...n, read: true})));
  };

  return (
    <div className="relative bg-white w-full min-h-[2042px] flex flex-col font-sans">
      
      {/* MAIN CONTAINER - Centered at 1280px on large screens */}
      <div className="relative w-full max-w-[1280px] mx-auto h-full flex flex-col">
        
        {/* --- NAV BAR --- */}
        <nav className="hidden md:flex flex-row items-center justify-between px-[25px] h-[74px] w-full relative">
          {/* Logo & Links */}
          <div className="flex flex-row items-center gap-[282px]">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <span className="text-[18px] font-semibold text-[#333333]">ShopRise</span>
            </div>
            
            <div className="flex items-center gap-[50px]">
              <a href="#" className="text-[16px] font-medium text-[#FF7F50]">All listing</a>
              <a href="#" className="text-[16px] font-normal text-[#333333]">About us</a>
              <a href="#" className="text-[16px] font-normal text-[#333333]">FAQ</a>
              <a href="#" className="text-[16px] font-normal text-[#333333]">Blog</a>
            </div>
          </div>

          {/* Profile & Actions */}
          <div className="absolute top-[18px] right-[0px] w-[181px] h-[35px] flex items-center gap-5">
             {/* Icons */}
             <div className="flex gap-4 text-gray-700">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </div>
             
             {/* Profile */}
             <div className="flex items-center gap-[5px]">
                <span className="text-[16px] font-normal text-[#333333]">John DOE</span>
                <div className="w-[35px] h-[35px] rounded-full border border-[#FF7F50] bg-gray-300 bg-cover" style={{backgroundImage: "url('/user.jpg')"}}></div>
             </div>
          </div>
        </nav>

        {/* --- FILTERS & TABS SECTION --- */}
        <div className="relative hidden md:flex flex-col pt-[43px] px-[25px] w-full">
          
          {/* Line 1: Sort & Location */}
          <div className="flex justify-between items-center mb-6">
             {/* Sort */}
             <div className="flex items-center gap-2.5">
               <span className="text-[16px] font-medium text-[#333333]">Sort by:</span>
               <button className="flex items-center gap-2 px-2.5 py-2 border border-[#D3D3D3] rounded-[6px] w-[134px] h-[39px]">
                 <span className="text-[16px] text-[#333333]">Less viewed</span>
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
               </button>
             </div>

             {/* Location */}
             <div className="flex items-center gap-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1F3A93"/></svg>
                <span className="text-[18px] font-medium text-[#1F3A93]">Los Angeles.CA</span>
                <span className="text-[18px] text-[#1F3A93]">.</span>
                <span className="text-[18px] font-normal text-[#1F3A93]">10km</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </div>
          </div>

          {/* Line 2: Categories, Tabs, Search */}
          <div className="flex flex-col gap-4 border-y border-[#D3D3D3] py-4">
             <div className="flex items-center gap-[15px]">
               {/* Categories Dropdown */}
               <div className="flex items-center gap-1 pr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-[16px] font-medium text-[#333333]">Categories</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
               </div>
               <div className="w-[1px] h-[25px] bg-[#333333] rotate-90 mx-2"></div>
               
               {/* Tabs */}
               <div className="flex gap-[15px]">
                  <span className="text-[16px] font-normal text-[#333333]">For you</span>
                  <span className="text-[16px] font-normal text-[#333333]">Local</span>
                  <span className="text-[16px] font-normal text-[#333333]">Selling</span>
                  <span className="text-[16px] font-normal text-[#333333]">Buying</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[16px] font-normal text-[#333333]">More</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
               </div>

               {/* Search Bar (Absolute in design, here flex-1) */}
               <div className="ml-auto flex items-center border border-[#D3D3D3] rounded-[25px] w-[406px] h-[39px] px-[2px] pl-[10px]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#333333"/></svg>
                 <button className="ml-auto bg-[#FF7F50] text-white rounded-[20px] w-[74px] h-[35px] font-medium text-[16px]">Search</button>
               </div>
             </div>
          </div>
        </div>

        {/* --- TAGS (Scrollable) --- */}
        <div className="hidden md:flex px-[25px] pt-6 pb-4 gap-4 overflow-x-auto no-scrollbar">
          {filterTags.map(tag => (
            <div key={tag.id} className="flex items-center px-3 py-2 border border-[#D3D3D3] rounded-[20px] gap-2 shrink-0 h-[37px]">
              <span className="text-[14px] font-medium text-[#333333]">{tag.label}</span>
              <button onClick={() => removeTag(tag.id)} className="text-[#111111]">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          ))}
          <button className="text-[16px] font-semibold text-[#FF7F50]">Clear all categories</button>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="hidden md:block px-[25px] pt-[278px] pb-[20px]">
          <div className="flex flex-wrap justify-center gap-[17px]">
            {Array(PRODUCT_COUNT).fill(null).map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center gap-[70px] mt-10 w-[414px] h-[47px] mx-auto">
            <button className="p-2 bg-white hover:bg-gray-50 rounded">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2" transform="rotate(90)"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            
            <div className="flex gap-1 bg-[#D3D3D3] rounded-lg h-[27px]">
              <button className="w-[27px] h-[27px] bg-[#D3D3D3] text-[14px] font-medium text-[#333333] rounded flex items-center justify-center">1</button>
              <button className="w-[29px] h-[27px] bg-white text-[14px] font-medium text-[#333333] rounded flex items-center justify-center">2</button>
              <button className="w-[29px] h-[27px] bg-white text-[14px] font-medium text-[#333333] rounded flex items-center justify-center">3</button>
              <button className="w-[29px] h-[27px] bg-white text-[14px] font-medium text-[#333333] rounded flex items-center justify-center">4</button>
              <button className="w-[40px] h-[27px] bg-white text-[14px] font-medium text-[#333333] rounded flex items-center justify-center">...</button>
            </div>

            <button className="p-2 bg-white hover:bg-gray-50 rounded">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2" transform="rotate(-90)"><path d="M6 9l6 6 6-6"/></svg>
            </button>
          </div>
        </div>

        {/* --- NOTIFICATION PANEL (Absolute on Desktop, Drawer on Mobile) --- */}
        <div className="hidden lg:block absolute top-[160px] right-0 w-[342px] border border-[#D3D3D3] shadow-lg bg-white rounded-[8px] h-[781px] overflow-hidden flex flex-col z-50">
          {/* Header */}
          <div className="flex flex-col gap-4 p-4 border-b border-[#D3D3D3] h-[81px] shrink-0">
            <div className="flex justify-between items-center h-[32px]">
              <div className="flex items-center gap-2">
                <span className="text-[18px] font-semibold text-[#333333]">Notifications</span>
                <div className="relative w-5 h-5 bg-[rgba(31,58,147,0.25)] rounded-full flex items-center justify-center">
                    <span className="text-[12px] font-bold text-[#1F3A93]">6</span>
                </div>
              </div>
              <button onClick={markAllRead} className="text-[14px] font-medium text-[#FF7F50]">Mask all as unread</button>
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-0 custom-scrollbar">
            <div className="flex flex-col">
              {notifications.map(item => (
                <NotificationItem key={item.id} item={item} onRead={() => {}} />
              ))}
            </div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <footer className="bg-[#F7F7F7] w-full mt-auto py-[40px] px-[25px] border-t border-transparent lg:border-transparent">
          <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20">
            {/* Brand */}
            <div className="flex flex-col gap-5 lg:w-[373px]">
              <div className="flex items-center gap-2.5">
                 <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                 <span className="text-[18px] font-semibold text-[#333333]">ShopRise</span>
              </div>
              <p className="text-[14px] leading-[20px] text-[#333333]">
                ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, unparalleled user experience, and unwavering integrity. As we continue to grow and evolve, our core principle remains unchanged: to empower each user to buy and sell with confidence.
              </p>
            </div>

            {/* Nav Links */}
            <div className="flex gap-12 lg:gap-20">
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-[16px] font-medium text-[#FF7F50]">All listing</a>
                    <a href="#" className="text-[16px] font-normal text-[#333333]">About us</a>
                    <a href="#" className="text-[16px] font-normal text-[#333333]">FAQ</a>
                    <a href="#" className="text-[16px] font-normal text-[#333333]">Blog</a>
                </div>
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-[16px] font-normal text-[#333333]">Privacy Policy</a>
                    <a href="#" className="text-[16px] font-normal text-[#333333]">Terms & Conditions</a>
                    <a href="#" className="text-[16px] font-normal text-[#333333]">Cookie Policy</a>
                </div>
            </div>

            {/* Newsletter & Social */}
            <div className="flex-1 flex flex-col gap-4 items-end">
               <div className="flex flex-col gap-2 w-full max-w-[436px]">
                  <span className="text-[18px] font-medium text-[#333333]">Subscribe to our newsletter</span>
                  <div className="flex items-center border border-[#D3D3D3] rounded-[25px] bg-white h-[39px]">
                     <input type="email" placeholder="Email" className="flex-1 px-4 outline-none text-[16px] font-medium text-[#333333] bg-transparent"/>
                     <button className="bg-[#FF7F50] text-white text-[16px] font-medium px-6 py-1.5 rounded-[20px]">Subscribe</button>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-[30px] h-[30px] bg-[#1F3A93] rounded-full cursor-pointer"></div>
                  <div className="w-[30px] h-[30px] bg-[#1F3A93] rounded-full cursor-pointer"></div>
               </div>
            </div>
          </div>
          <div className="mt-10 text-center lg:text-right text-[18px] text-[#000000]">
            © All Right Reserved by | ShopRise | Copyright 2023
          </div>
        </footer>

      </div>
    </div>
  );
}