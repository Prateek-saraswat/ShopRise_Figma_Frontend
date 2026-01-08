'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState }  from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[223px] bg-gray-50 flex flex-col pt-[17px]">
        {/* Logo */}
        <div className="flex items-center px-[25px] gap-[10px] h-[40px] mb-[17px]">
          <div className="w-[40px] h-[40px] bg-gray-300 rounded-full"></div>
          <span className="text-lg font-semibold text-gray-800">ShopRise</span>
        </div>

        {/* Main Navigation */}
        <div className="flex flex-col px-[25px] gap-[10px] mb-auto">
        <Link
  href="/admin"
  className={`flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[173px] h-[44px] ${
    pathname === '/admin'
      ? 'bg-white text-orange-500'
      : 'text-gray-800'
  }`}
>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"/>
            </svg>
            <span className={`text-base ${activeTab === 'dashboard' ? 'font-medium' : 'font-normal'}`}>Dashboard</span>
          </Link>

          <Link
  href="/admin/purchasing"
  className={`flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] ${
    pathname === '/admin/purchasing'
      ? 'bg-white text-orange-500'
      : 'text-gray-800'
  }`}
>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className="text-base font-normal">Purchasing</span>
          </Link>

          <Link
  href="/admin/sales"
  className={`flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] ${
    pathname === '/admin/sales'
      ? 'bg-white text-orange-500'
      : 'text-gray-800'
  }`}
>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
            </svg>
            <span className="text-base font-normal">Sales</span>
          </Link>

          <Link
  href="/admin/favourites"
  className={`flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] ${
    pathname === '/admin/favourites'
      ? 'bg-white text-orange-500'
      : 'text-gray-800'
  }`}
>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="text-base font-normal">Favourites</span>
          </Link>

          <Link
  href="/admin/chat"
  className={`flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] ${
    pathname === '/admin/chat'
      ? 'bg-white text-orange-500'
      : 'text-gray-800'
  }`}
>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-base font-normal">Chat</span>
          </Link>

          <Link
  href="/admin/settings"
  className={`flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] ${
    pathname === '/admin/settings'
      ? 'bg-white text-orange-500'
      : 'text-gray-800'
  }`}
>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-base font-normal">Setting</span>
          </Link>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col px-[25px] pb-[25px] gap-[10px]">
        <Link
  href="/admin/help"
  className={`flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] ${
    pathname === '/admin/help'
      ? 'bg-white text-orange-500'
      : 'text-gray-800'
  }`}
>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-base font-normal">Help</span>
          </Link>

          <button className="flex items-center gap-2 px-[15px] py-[10px] rounded-md w-[172px] h-[44px] text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="text-base font-normal">Logout</span>
          </button>
        </div>
      </div>

      {/* Right Content (CHANGES) */}
      <div className="flex-1 overflow-auto p-6">
        {children}
      </div>
    </div>
  );
}
