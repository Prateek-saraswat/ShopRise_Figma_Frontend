export default function Footer02() {
    return (
      <footer className="w-full bg-[#F7F7F7]">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
  
            {/* Logo Section */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D3D3D3] rounded-full" />
                <span className="text-lg font-semibold text-[#333333]">
                  ShopRise
                </span>
              </div>
  
              <p className="text-sm text-[#333333] leading-5">
                ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, unparalleled user experience, and unwavering integrity.
              </p>
  
              <button className="w-fit px-6 py-2.5 bg-[#1F3A93] text-white rounded-full">
                Sell on ShopRise
              </button>
            </div>
  
            {/* Navigation Left */}
            <nav className="flex flex-col gap-3">
              <a className="text-[#FF7F50] font-medium">All listing</a>
              <a className="text-[#333333]">About us</a>
              <a className="text-[#333333]">FAQ</a>
              <a className="text-[#333333]">Blog</a>
            </nav>
  
            {/* Navigation Center */}
            <nav className="flex flex-col gap-3">
              <a className="text-[#333333]">Privacy Policy</a>
              <a className="text-[#333333]">Terms & Conditions</a>
              <a className="text-[#333333]">Shipping Policy</a>
            </nav>
  
            {/* Newsletter */}
            <div className="flex flex-col gap-4">
              <span className="font-medium text-lg text-[#333333]">
                Subscribe to our newsletter
              </span>
  
              <div className="flex items-center border border-[#D3D3D3] rounded-full p-1">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 bg-transparent outline-none"
                />
                <button className="px-5 py-2 bg-[#FF7F50] text-white rounded-full">
                  Subscribe
                </button>
              </div>
  
              {/* Social Icons */}
              <div className="flex gap-3 mt-2">
                <div className="w-8 h-8 bg-[#1F3A93] rounded flex items-center justify-center" />
                <div className="w-8 h-8 bg-[#1F3A93] rounded flex items-center justify-center" />
              </div>
            </div>
  
          </div>
  
          {/* Divider */}
          <div className="border-t border-[#D3D3D3] mt-10 pt-6 text-center text-sm text-[#333333]">
            © All Right Reserved by | ShopRise | Copyright 2023
          </div>
  
        </div>
      </footer>
    );
  }
  