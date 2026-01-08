import Link from "next/link";

export default function Footer02() {
    return (
      <footer className="relative w-[1280px]  h-[299px] bg-[#F7F7F7] mx-auto">
        {/* Logo Section */}
        <div className="absolute left-[25px] top-1/2 -translate-y-1/2 w-[373px] flex flex-col gap-5">
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center gap-[10px]">
              <div className="w-10 h-10 bg-[#D3D3D3] rounded-full"></div>
              <div className="font-semibold text-lg leading-[22px] text-[#333333]">
                ShopRise
              </div>
            </div>
            <div className="pl-[10px] font-normal text-sm leading-5 text-[#333333] max-w-[363px]">
              ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, unparalleled user experience, and unwavering integrity. As we continue to grow and evolve, our core principle remains unchanged: to empower each user to buy and sell with confidence.
            </div>
          </div>
          <button className="flex justify-center items-center px-[25px] py-[10px] w-[178px] h-[39px] bg-[#1F3A93] rounded-[25px]">
            <span className="font-medium text-base leading-[19px] text-white">
              Sell on ShopRise
            </span>
          </button>
        </div>
  
        {/* Navigation Left */}
        <nav className="absolute left-[422px] top-[33px] flex flex-col gap-[15px]">
          <Link href="/" className="font-medium text-base leading-[19px] text-[#FF7F50] text-center w-[70px]">
            All listing
          </Link>
          <Link href="/about" className="font-normal text-base leading-[19px] text-[#333333] text-center w-[68px]">
            About us
          </Link>
          <Link href="/faq" className="font-normal text-base leading-[19px] text-[#333333] text-center w-[31px]">
            FAQ
          </Link>
          <Link href="/blog" className="font-normal text-base leading-[19px] text-[#333333] text-center w-[34px]">
            Blog
          </Link>
        </nav>
  
        {/* Navigation Center */}
        <nav className="absolute left-[545px] top-[33px] flex flex-col gap-[15px]">
          <a href="#" className="font-normal text-base leading-[19px] text-[#333333] text-center w-[105px]">
            Privacy Policy
          </a>
          <a href="#" className="font-normal text-base leading-[19px] text-[#333333] text-center w-[165px]">
            Terms and Conditions
          </a>
          <a href="#" className="font-normal text-base leading-[19px] text-[#333333] text-center w-[116px]">
            Shipping Policy
          </a>
        </nav>
  
        {/* Newsletter Section */}
        <div className="absolute left-[819px] top-[33px] w-[436px] flex flex-col gap-[10px]">
          <div className="font-medium text-lg leading-[22px] text-[#333333]">
            Suscribe to our newsletter
          </div>
          <div className="flex items-center px-[10px] pr-[2px] py-[2px] w-[436px] h-[39px] border border-[#D3D3D3] rounded-[25px]">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent border-none outline-none font-medium text-base leading-[19px] text-[#333333] placeholder:text-[#333333]"
            />
            <button className="flex justify-center items-center px-[10px] py-2 w-[87px] h-[35px] bg-[#FF7F50] rounded-[20px]">
              <span className="font-medium text-base leading-[19px] text-white">
                Suscribe
              </span>
            </button>
          </div>
        </div>
  
        {/* Social Media */}
        <div className="absolute left-[1223px] top-1/2 -translate-y-1/2 flex flex-col gap-[10px]">
          <div className="w-[30px] h-[30px] bg-[#1F3A93] rounded flex items-center justify-center cursor-pointer">
            <svg className="w-[18px] h-[18px] fill-white" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
          <div className="w-[30px] h-[30px] bg-[#1F3A93] rounded flex items-center justify-center cursor-pointer">
            <svg className="w-[18px] h-[18px] fill-white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="absolute right-[25px] bottom-[33px] font-normal text-lg leading-[22px] text-right text-black">
          © All Right Reserved by | ShopRise | Copyright 2023
        </div>
      </footer>
    );
  }