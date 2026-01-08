'use client'
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import UserProfileHeader from './UserNav';
import Link from 'next/link'



const MainNavBar = () => {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path;

  const isDashboard = pathname.startsWith('/dashboard')

  return (
    <header className="w-full bg-white">
      {/* Top Navigation Bar */}
      <div className="py-4 border-b border-[#D3D3D3]">
        <nav className="flex items-center justify-between max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link href="/">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#D3D3D3]" />
            <span className="text-lg font-semibold text-[#333333] font-inter">
              ShopRise
            </span>
          </div>
          </Link>

          {/* Main Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
          <Link
  href="/"
  className={`text-base font-medium transition-colors ${
    isActive('/') ? 'text-[#FF7F50]' : 'text-[#333333] hover:text-[#FF7F50]'
  }`}
>
  All listing
</Link><Link
  href="/about"
  className={`text-base transition-colors ${
    isActive('/about') ? 'text-[#FF7F50]' : 'text-[#333333] hover:text-[#FF7F50]'
  }`}
>
  About us
</Link>
<Link
  href="/faq"
  className={`text-base transition-colors ${
    isActive('/faq') ? 'text-[#FF7F50]' : 'text-[#333333] hover:text-[#FF7F50]'
  }`}
>
  FAQ
</Link>
<Link
  href="/blog"
  className={`text-base transition-colors ${
    isActive('/blog') ? 'text-[#FF7F50]' : 'text-[#333333] hover:text-[#FF7F50]'
  }`}
>
  Blog
</Link>
          </div>

          {/* Sign In Button */}
          <div className="flex items-center gap-7">
            {!isDashboard ? 
            <a href="/login">
            <button className="hidden md:flex items-center justify-center px-6 py-2.5 bg-[#1F3A93] text-white text-base font-medium rounded-full hover:bg-[#152B6F] transition-colors">
              Sign In
            </button>
            </a>
            : <UserProfileHeader />
}
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-[#333333]" />
            </button>
          </div>
        </nav>
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
};

export default MainNavBar;
