import { Facebook, Instagram } from 'lucide-react';

export default function MainFooter() {
  return (
    <footer className="bg-[#F7F7F7] w-full px-6 md:px-8 lg:px-12 py-8 relative">
      <div className=" mx-auto">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          
          {/* Left Section - Brand & Description */}
          <div className="flex flex-col gap-5 max-w-[373px]">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#D3D3D3]" />
              <span className="font-semibold text-lg text-[#333333]">ShopRise</span>
            </div>

            {/* Description */}
            <div className="pl-2.5">
              <p className="text-sm leading-5 text-[#333333]">
                ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, 
                unparalleled user experience, and unwavering integrity. As we continue to grow and evolve, 
                our core principle remains unchanged: to empower each user to buy and sell with confidence.
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-[#1F3A93] text-white px-6 py-2.5 rounded-[25px] font-medium text-base w-fit hover:bg-[#162d70] transition-colors">
              Sell on ShopRise
            </button>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
            {/* First Nav Column */}
            <nav className="flex flex-col gap-[15px]">
              <a href="#" className="text-base font-medium text-[#FF7F50] hover:underline">
                All listing
              </a>
              <a href="#" className="text-base text-[#333333] hover:text-[#FF7F50] transition-colors">
                About us
              </a>
              <a href="#" className="text-base text-[#333333] hover:text-[#FF7F50] transition-colors">
                FAQ
              </a>
              <a href="#" className="text-base text-[#333333] hover:text-[#FF7F50] transition-colors">
                Blog
              </a>
            </nav>

            {/* Second Nav Column */}
            <nav className="flex flex-col gap-[15px]">
              <a href="#" className="text-base text-[#333333] hover:text-[#FF7F50] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-base text-[#333333] hover:text-[#FF7F50] transition-colors">
                Terms and Conditions
              </a>
              <a href="#" className="text-base text-[#333333] hover:text-[#FF7F50] transition-colors">
                Shipping Policy
              </a>
            </nav>
          </div>

          {/* Right Section - Newsletter & Social */}
          <div className="flex flex-col gap-8 justify-around lg:gap-0 lg:flex-row lg:items-start lg:justify-between flex-1 max-w-[500px]">
            {/* Newsletter */}
            <div className="flex flex-col gap-2.5">
              <h3 className="text-lg font-medium text-[#333333]">
                Subscribe to our newsletter
              </h3>
              <div className="flex items-center border border-[#D3D3D3] rounded-[25px] px-2.5 py-0.5 gap-2 ">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent outline-none text-base font-medium text-[#333333] placeholder:text-[#333333] min-w-0"
                />
                <button className="bg-[#FF7F50] text-white px-2.5 py-2 rounded-[20px] font-medium text-base whitespace-nowrap hover:bg-[#ff6a3a] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex lg:flex-col gap-2.5 lg:self-center">
              <a 
                href="#" 
                className="w-[30px] h-[30px] bg-[#1F3A93] rounded flex items-center justify-center hover:bg-[#162d70] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-[30px] h-[30px] bg-[#1F3A93] rounded flex items-center justify-center hover:bg-[#162d70] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 lg:mt-16 text-right">
          <p className="text-lg text-black">
            © All Right Reserved by | ShopRise | Copyright 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
