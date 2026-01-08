import React from 'react';

const Blog2 = () => {
  return (
    <div className="relative w-[1280px] h-[2354px] bg-white">
      {/* Header */}
      {/* <header className="absolute w-full h-[74px] left-0 top-0 bg-white">
        <div className="absolute w-[1227px] h-[40px] left-[28px] top-[17px] bg-white flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <div className="w-[40px] h-[40px] bg-[#D3D3D3] rounded-full"></div>
            <span className="font-['Inter'] font-semibold text-[18px] leading-[22px] text-[#333333]">
              ShopRise
            </span>
          </div>
          
          <nav className="flex gap-[50px]">
            <a href="#" className="font-['Inter'] font-normal text-[16px] leading-[19px] text-[#333333]">All listing</a>
            <a href="#" className="font-['Inter'] font-normal text-[16px] leading-[19px] text-[#333333]">About us</a>
            <a href="#" className="font-['Inter'] font-normal text-[16px] leading-[19px] text-[#333333]">FAQ</a>
            <a href="#" className="font-['Inter'] font-medium text-[16px] leading-[19px] text-[#FF7F50]">Blog</a>
          </nav>
          
          <button className="w-[102px] h-[39px] bg-[#1F3A93] rounded-[25px] flex justify-center items-center">
            <span className="font-['Inter'] font-medium text-[16px] leading-[19px] text-white">
              Sell on ShopRise
            </span>
          </button>
        </div>
      </header> */}

      {/* Hero Section */}
      <div className="absolute w-[509px] h-[112px] left-1/2 -translate-x-1/2 top-[104px] bg-white flex flex-col justify-center items-center gap-[15px]">
        <h1 className="w-[509px] h-[78px] font-['Inter'] font-medium text-[32px] leading-[39px] text-center text-[#1F3A93]">
          Discover the World of Knowledge with ShopRise
        </h1>
        <p className="w-[448px] h-[19px] font-['Inter'] font-normal text-[16px] leading-[19px] text-center text-[#333333]">
          Join us in this exciting adventure of discovery and learning.
        </p>
      </div>

      {/* Category Filter */}
      <div className="absolute w-[771px] h-[35px] left-1/2 -translate-x-1/2 top-[245px] flex gap-[47px]">
        <button className="w-[80px] h-[35px] bg-[#1F3A93] rounded-[10px] flex justify-center items-center">
          <span className="font-['Inter'] font-medium text-[16px] leading-[25px] text-white">
            View all
          </span>
        </button>
        <button className="font-['Inter'] font-normal text-[16px] leading-[25px] text-[#333333]">
          Technology News
        </button>
        <button className="font-['Inter'] font-normal text-[16px] leading-[25px] text-[#333333]">
          Health and Well-being
        </button>
        <button className="font-['Inter'] font-normal text-[16px] leading-[25px] text-[#333333]">
          Travel and Adventure
        </button>
        <button className="font-['Inter'] font-normal text-[16px] leading-[25px] text-[#333333]">
          Food
        </button>
      </div>

      {/* Articles Grid */}
      <div className="absolute w-[1131px] h-[1678px] left-[72px] top-[306px]">
        
        {/* Article 1 - Technology News */}
        <div className="absolute w-[347px] h-[511px] left-[20px] top-[578px]">
          <div className="absolute w-full h-[52.25%] top-0 bg-white shadow-[0px_1px_5px_rgba(0,0,0,0.25)] rounded-[5px]"></div>
          <div className="absolute left-0 top-[50.49%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#333333]">
            Technology News
          </div>
          <h3 className="absolute left-0 top-[57.73%] font-['Inter'] font-medium text-[20px] leading-[24px] text-[#1D3E80]">
            Future Smartphones
          </h3>
          <p className="absolute left-0 top-[65.36%] font-['Inter'] italic font-normal text-[16px] leading-[25px] text-[#333333]">
            An overview of the next generations of smartphones and their advanced features.
          </p>
          <div className="absolute left-0 top-[84.34%] w-[23.05%] h-[15.66%] bg-gray-300 rounded-full"></div>
          <div className="absolute left-[28.82%] top-[87.28%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#1D3E80]">
            David Brown
          </div>
          <div className="absolute left-[28.82%] top-[92.17%] font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
            17 Apr 2022
          </div>
        </div>

        {/* Article 2 - 5G Technology */}
        <div className="absolute w-[347px] h-[511px] left-[20px] top-[1147px]">
          <div className="absolute w-full h-[52.25%] top-0 bg-white shadow-[0px_1px_5px_rgba(0,0,0,0.25)] rounded-[5px]"></div>
          <div className="absolute left-0 top-[50.49%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#333333]">
            Technology News
          </div>
          <h3 className="absolute left-0 top-[57.73%] font-['Inter'] font-medium text-[20px] leading-[24px] text-[#1D3E80]">
            The Rise of 5G Technology
          </h3>
          <p className="absolute left-0 top-[65.36%] font-['Inter'] italic font-normal text-[16px] leading-[25px] text-[#333333]">
            Explore the rapid advancement of 5G technology and its potential to revolutionize connectivity.
          </p>
          <div className="absolute left-0 top-[84.34%] w-[23.05%] h-[15.66%] bg-gray-300 rounded-full"></div>
          <div className="absolute left-[28.82%] top-[87.28%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#1D3E80]">
            Mark Roberts
          </div>
          <div className="absolute left-[28.82%] top-[92.17%] font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
            11 Jan 2022
          </div>
          <span className="absolute left-[54.18%] top-[92.17%] font-['Montserrat'] font-normal text-[14px] leading-[25px] text-[#333333]">
            .
          </span>
          <div className="absolute left-[58.5%] top-[92.17%] font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
            1 hour read
          </div>
        </div>

        {/* Article 3 - Healthy Eating */}
        <div className="absolute w-[347px] h-[511px] left-[392px] top-[20px]">
          <div className="absolute w-full h-[52.25%] top-0 bg-white shadow-[0px_1px_5px_rgba(0,0,0,0.25)] rounded-[5px]"></div>
          <div className="absolute left-0 top-[50.49%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#333333]">
            Health and Well-being
          </div>
          <h3 className="absolute left-0 top-[57.73%] font-['Inter'] font-medium text-[20px] leading-[24px] text-[#1D3E80]">
            Tips for Healthy Eating
          </h3>
          <p className="absolute left-0 top-[65.36%] font-['Inter'] italic font-normal text-[16px] leading-[25px] text-[#333333]">
            Learn how to maintain a balanced diet for a healthier life.
          </p>
          <div className="absolute left-0 top-[84.34%] w-[23.05%] h-[15.66%] bg-gray-300 rounded-full"></div>
          <div className="absolute left-[28.82%] top-[87.28%] font-['Inter'] font-medium text-[17.5px] leading-[25px] text-[#1D3E80]">
            Lisa Miller
          </div>
          <div className="absolute w-[168px] h-[25px] left-[100px] top-[92.17%] flex gap-[12px] items-start">
            <span className="font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
              12 sept 2022
            </span>
            <span className="font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
              1 day read
            </span>
          </div>
        </div>

        {/* Article 4 - World Cuisine */}
        <div className="absolute w-[347px] h-[511px] left-[392px] top-[578px]">
          <div className="absolute w-full h-[52.25%] top-0 bg-white shadow-[0px_1px_5px_rgba(0,0,0,0.25)] rounded-[5px]"></div>
          <div className="absolute left-0 top-[50.49%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#333333]">
            Food and Gastronomy
          </div>
          <h3 className="absolute left-0 top-[57.73%] font-['Inter'] font-medium text-[20px] leading-[24px] text-[#1D3E80]">
            World Cuisine Recipes
          </h3>
          <p className="absolute left-0 top-[65.36%] font-['Inter'] italic font-normal text-[16px] leading-[25px] text-[#333333]">
            Explore delicious international recipes to try at home.
          </p>
          <div className="absolute left-0 top-[84.34%] w-[23.05%] h-[15.66%] bg-gray-300 rounded-full"></div>
          <div className="absolute left-[28.82%] top-[87.28%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#1D3E80]">
            Sophia Martinez
          </div>
          <div className="absolute left-[28.82%] top-[92.17%] font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
            25 May 2023
          </div>
        </div>

        {/* Article 5 - Pastry Secrets */}
        <div className="absolute w-[347px] h-[511px] left-[392px] top-[1147px]">
          <div className="absolute w-full h-[52.25%] top-0 bg-white shadow-[0px_1px_5px_rgba(0,0,0,0.25)] rounded-[5px]"></div>
          <div className="absolute left-0 top-[50.49%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#333333]">
            Food and Gastronomy
          </div>
          <h3 className="absolute left-0 top-[57.73%] font-['Inter'] font-medium text-[20px] leading-[24px] text-[#1D3E80]">
            The Secrets of Pastry
          </h3>
          <p className="absolute left-0 top-[65.36%] font-['Inter'] italic font-normal text-[16px] leading-[25px] text-[#333333]">
            Tips to become an expert pastry chef and create incredible desserts.
          </p>
          <div className="absolute left-0 top-[84.34%] w-[23.05%] h-[15.66%] bg-gray-300 rounded-full"></div>
          <div className="absolute left-[28.82%] top-[87.28%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#1D3E80]">
            Maria Rodriguez
          </div>
          <div className="absolute left-[28.82%] top-[92.17%] font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
            5 dec 2022
          </div>
          <span className="absolute left-[54.18%] top-[92.17%] font-['Montserrat'] font-normal text-[14px] leading-[25px] text-[#333333]">
            .
          </span>
          <div className="absolute left-[58.5%] top-[92.17%] font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
            5 min read
          </div>
        </div>

        {/* Article 6 - Exotic Cities */}
        <div className="absolute w-[347px] h-[511px] left-[764px] top-[20px]">
          <div className="absolute w-full h-[52.25%] top-0 bg-white shadow-[0px_1px_5px_rgba(0,0,0,0.25)] rounded-[5px]"></div>
          <div className="absolute left-0 top-[50.49%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#333333]">
            Travel and Adventure
          </div>
          <h3 className="absolute left-0 top-[57.73%] font-['Inter'] font-medium text-[20px] leading-[24px] text-[#1D3E80]">
            Exotic Cities to Visit
          </h3>
          <p className="absolute left-0 top-[65.36%] font-['Inter'] italic font-normal text-[16px] leading-[25px] text-[#333333]">
            Discover unique urban destinations around the world.
          </p>
          <div className="absolute left-0 top-[84.34%] w-[23.05%] h-[15.66%] bg-gray-300 rounded-full"></div>
          <div className="absolute left-[28.82%] top-[87.28%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#1D3E80]">
            Jessica Turner
          </div>
          <div className="absolute left-[28.82%] top-[92.17%] font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
            21 Jan 2023
          </div>
        </div>

        {/* Article 7 - Natural Wonders */}
        <div className="absolute w-[347px] h-[511px] left-[764px] top-[578px]">
          <div className="absolute w-full h-[52.25%] top-0 bg-white shadow-[0px_1px_5px_rgba(0,0,0,0.25)] rounded-[5px]"></div>
          <div className="absolute left-0 top-[50.49%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#333333]">
            Travel and Adventure
          </div>
          <h3 className="absolute left-0 top-[57.73%] font-['Inter'] font-medium text-[20px] leading-[24px] text-[#1D3E80]">
            Exploring the Natural Wonders
          </h3>
          <p className="absolute left-0 top-[65.36%] font-['Inter'] italic font-normal text-[16px] leading-[25px] text-[#333333]">
            Breathtaking destinations for nature and adventure enthusiasts.
          </p>
          <div className="absolute left-0 top-[84.34%] w-[23.05%] h-[15.66%] bg-gray-300 rounded-full"></div>
          <div className="absolute left-[28.82%] top-[87.28%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#1D3E80]">
            Daniel White
          </div>
          <div className="absolute left-[28.82%] top-[92.17%] font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
            9 aug 2023
          </div>
        </div>

        {/* Article 8 - AI Ethics */}
        <div className="absolute w-[347px] h-[511px] left-[764px] top-[1147px]">
          <div className="absolute w-full h-[52.25%] top-0 bg-white shadow-[0px_1px_5px_rgba(0,0,0,0.25)] rounded-[5px]"></div>
          <div className="absolute left-0 top-[50.49%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#333333]">
            Technology News
          </div>
          <h3 className="absolute left-0 top-[57.73%] font-['Inter'] font-medium text-[20px] leading-[24px] text-[#1D3E80]">
            The Ethical Implications of AI
          </h3>
          <p className="absolute left-0 top-[65.36%] font-['Inter'] italic font-normal text-[16px] leading-[25px] text-[#333333]">
            Explore the ethical dilemmas and considerations surrounding the use of artificial intelligence in various sectors.
          </p>
          <div className="absolute left-0 top-[84.34%] w-[23.05%] h-[15.66%] bg-gray-300 rounded-full"></div>
          <div className="absolute left-[28.82%] top-[87.28%] font-['Inter'] font-medium text-[16px] leading-[25px] text-[#1D3E80]">
            Alex Johnson
          </div>
          <div className="absolute left-[28.82%] top-[92.17%] font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
            12 oct 2022
          </div>
        </div>

        {/* Featured Article - Technology Trends */}
        <div className="absolute w-[347px] h-[508px] left-[92px] top-[326px] flex flex-col gap-[17px]">
          <div className="flex flex-col gap-[14px]">
            <div className="w-[347px] h-[244px] bg-white shadow-[0px_1px_5px_rgba(0,0,0,0.25)] rounded-[5px]"></div>
            <div className="font-['Inter'] font-medium text-[16px] leading-[25px] text-[#333333]">
              Technology News
            </div>
          </div>
          
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-['Inter'] font-medium text-[20px] leading-[24px] text-[#1D3E80]">
              The Latest Technology Trends
            </h3>
            <p className="font-['Inter'] italic font-normal text-[16px] leading-[25px] text-[#333333]">
              Discover the latest technological innovations and their impact on our daily lives.
            </p>
          </div>
          
          <div className="flex items-center gap-[20px]">
            <div className="w-[80px] h-[80px] bg-gray-300 rounded-full"></div>
            <div className="flex flex-col">
              <div className="font-['Inter'] font-medium text-[16px] leading-[25px] text-[#1D3E80]">
                John Smith
              </div>
              <div className="flex gap-[12px] items-start">
                <span className="font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
                  11 Jan 2022
                </span>
                <span className="font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
                  .
                </span>
                <span className="font-['Inter'] font-normal text-[14px] leading-[25px] text-[#333333]">
                  5 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute w-[414px] h-[47px] left-1/2 -translate-x-1/2 top-[1974px] flex items-center justify-between">
        <button className="w-[30px] h-[20px] bg-white flex justify-center items-center">
          <div className="w-[10px] h-[10px] rotate-90">
            <div className="w-full h-full border-2 border-[#333333] rotate-90"></div>
          </div>
        </button>
        
        <div className="flex gap-[10px]">
          <button className="w-[27px] h-[27px] bg-[#D3D3D3] flex justify-center items-center">
            <span className="font-['Inter'] font-normal text-[14px] leading-[17px] text-[#333333]">1</span>
          </button>
          <button className="w-[29px] h-[27px] bg-white flex justify-center items-center">
            <span className="font-['Inter'] font-normal text-[14px] leading-[17px] text-[#333333]">2</span>
          </button>
          <button className="w-[29px] h-[27px] bg-white flex justify-center items-center">
            <span className="font-['Inter'] font-normal text-[14px] leading-[17px] text-[#333333]">3</span>
          </button>
          <button className="w-[40px] h-[27px] bg-white flex justify-center items-center">
            <span className="font-['Inter'] font-normal text-[14px] leading-[17px] text-[#333333]">4</span>
          </button>
          <button className="w-[29px] h-[27px] bg-white flex justify-center items-center">
            <span className="font-['Inter'] font-normal text-[14px] leading-[17px] text-[#333333]">5</span>
          </button>
        </div>
        
        <button className="w-[30px] h-[20px] bg-white flex justify-center items-center">
          <div className="w-[10px] h-[10px] -rotate-90">
            <div className="w-full h-full border-2 border-[#333333] -rotate-90"></div>
          </div>
        </button>
      </div>

      {/* Footer */}
      {/* <footer className="absolute w-[1280px] h-[299px] left-1/2 -translate-x-1/2 bottom-0 bg-[#F7F7F7]">
        <div className="absolute w-[373px] h-[234px] left-[25px] top-1/2 -translate-y-1/2 flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center gap-[10px]">
              <div className="w-[40px] h-[40px] bg-[#D3D3D3] rounded-full"></div>
              <span className="font-['Inter'] font-semibold text-[18px] leading-[22px] text-[#333333]">
                ShopRise
              </span>
            </div>
            <div className="pl-[10px]">
              <p className="w-[363px] h-[120px] font-['Inter'] font-normal text-[14px] leading-[20px] text-[#333333]">
                ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, unparalleled user experience, and unwavering integrity. As we continue to grow and evolve, our core principle remains unchanged: to empower each user to buy and sell with confidence.
              </p>
            </div>
          </div>
          <button className="w-[178px] h-[39px] bg-[#1F3A93] rounded-[25px] flex justify-center items-center">
            <span className="font-['Inter'] font-medium text-[16px] leading-[19px] text-white">
              Sell on ShopRise
            </span>
          </button>
        </div>

        <div className="absolute w-[70px] h-[121px] left-[422px] top-[33px] flex flex-col gap-[15px]">
          <a href="#" className="font-['Inter'] font-medium text-[16px] leading-[19px] text-[#FF7F50]">
            All listing
          </a>
          <a href="#" className="font-['Inter'] font-normal text-[16px] leading-[19px] text-[#333333]">
            About us
          </a>
          <a href="#" className="font-['Inter'] font-normal text-[16px] leading-[19px] text-[#333333]">
            FAQ
          </a>
          <a href="#" className="font-['Inter'] font-normal text-[16px] leading-[19px] text-[#333333]">
            Blog
          </a>
        </div>

        <div className="absolute w-[165px] h-[87px] left-[545px] top-[33px] flex flex-col gap-[15px]">
          <a href="#" className="font-['Inter'] font-normal text-[16px] leading-[19px] text-[#333333]">
            Privacy Policy
          </a>
          <a href="#" className="font-['Inter'] font-normal text-[16px] leading-[19px] text-[#333333]">
            Terms and Conditions
          </a>
          <a href="#" className="font-['Inter'] font-normal text-[16px] leading-[19px] text-[#333333]">
            Shipping Policy
          </a>
        </div>

        <div className="absolute w-[436px] h-[71px] left-[819px] top-[33px] flex flex-col gap-[10px]">
          <h3 className="font-['Inter'] font-medium text-[18px] leading-[22px] text-[#333333]">
            Subscribe to our newsletter
          </h3>
          <div className="w-full h-[39px] border border-[#D3D3D3] rounded-[25px] flex items-center justify-between px-[10px]">
            <span className="font-['Inter'] font-medium text-[16px] leading-[19px] text-[#333333]">
              Email
            </span>
            <button className="w-[87px] h-[35px] bg-[#FF7F50] rounded-[20px] flex justify-center items-center">
              <span className="font-['Inter'] font-medium text-[16px] leading-[19px] text-white">
                Subscribe
              </span>
            </button>
          </div>
        </div>

        <div className="absolute w-[30px] h-[70px] left-[1223px] top-1/2 -translate-y-1/2 flex flex-col gap-[10px]">
          <button className="w-[30px] h-[30px]">
            <div className="w-full h-full bg-[#1F3A93]"></div>
          </button>
          <button className="w-[30px] h-[30px]">
            <div className="w-full h-full bg-[#1F3A93]"></div>
          </button>
        </div>

        <div className="absolute w-[447px] h-[22px] left-[808px] top-[244px] font-['Inter'] font-normal text-[18px] leading-[22px] text-right text-[#333333]">
          © All Right Reserved by | ShopRise | Copyright 2023
        </div>
      </footer> */}
    </div>
  );
};

export default Blog2;