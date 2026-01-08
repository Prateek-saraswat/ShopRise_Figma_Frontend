export default function AboutPage2() {
    return (
      <div className="flex flex-col items-center gap-[50px] w-[1328px] mx-auto py-[74px]">
        {/* Main Content Section */}
        <div className="flex flex-col items-center gap-[30px] w-[1283px]">
          {/* About Content and Image */}
          <div className="flex flex-row gap-5 w-[1228px]">
            {/* Left Content */}
            <div className="flex flex-col gap-[22px] w-[701px]">
              {/* About ShopRise Section */}
              <div className="flex flex-col gap-5">
                <h1 className="font-medium text-[22px] leading-7 text-[#1F3A93]">
                  About ShopRise – Elevating Your Local Shopping Experience
                </h1>
                <p className="font-normal text-lg leading-6 text-[#333333]">
                  Welcome to ShopRise, your premier Local Marketplace ShopRise isn't just a marketplace; it's a community revolutionizing local buying and selling. Founded in 2023, ShopRise has swiftly become a leading mobile marketplace for local buyers and sellers across the U.S. Our mission is clear: to create the most reliable and user-friendly local marketplace, empowering our users to engage in transactions with confidence and ease.
                </p>
              </div>
  
              {/* Our Journey Section */}
              <div className="flex flex-col gap-5">
                <h2 className="font-medium text-[22px] leading-7 text-[#1F3A93]">
                  Our Journey
                </h2>
                <p className="font-normal text-lg leading-6 text-[#333333]">
                  ShopRise started with a vision to streamline the local buying and selling process, making it as straightforward and safe as possible. Our platform is built on the belief that everyone deserves access to a marketplace that is not just efficient but also secure and centered around the community.
                </p>
              </div>
  
              {/* Why ShopRise Section */}
              <div className="flex flex-col gap-5">
                <h2 className="font-medium text-[22px] leading-7 text-[#1F3A93]">
                  Why ShopRise?
                </h2>
                <p className="font-medium text-lg leading-6 text-[#FF7F50]">
                  Trust and Safety: We prioritize your safety with features like secure messaging, verified community meet-up spots, and a comprehensive rating system.  Ease of Use: Our app's intuitive design makes buying and selling a breeze—just a few taps and you're set!  Eco-Friendly: Promoting local transactions helps reduce environmental impact, supporting sustainability.  Community-Centric: At ShopRise, we're building more than a platform; we're nurturing a community, fostering connections that enrich local neighborhoods.
                </p>
              </div>
  
              {/* Visioning the Future Section */}
              <div className="flex flex-col gap-5">
                <h2 className="font-medium text-[22px] leading-7 text-[#1F3A93]">
                  Visioning the Future
                </h2>
                <p className="font-normal text-lg leading-6 text-[#333333]">
                  Looking forward, ShopRise is dedicated to innovating and enhancing our services. Our aim is to broaden our reach, ensuring every user experience is seamless, secure, and satisfying. We're not just developing a marketplace; we're cultivating a community where everyone can find value and connection.
                </p>
              </div>
  
              {/* Join the ShopRise Community Section */}
              <div className="flex flex-col gap-5">
                <h2 className="font-medium text-[22px] leading-7 text-[#1F3A93]">
                  Join the ShopRise Community
                </h2>
                <p className="font-normal text-lg leading-6 text-[#333333]">
                  Whether you're decluttering, hunting for a bargain, or starting a local business venture, ShopRise is your go-to platform. Download our app today and join a thriving community of users who choose ShopRise for all their local buying and selling needs.
                </p>
              </div>
            </div>
  
            {/* Right Image */}
            <div className="w-[507px] h-[404px] bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="/about-team.png" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* How it Works Section */}
          <div className="flex flex-col gap-[25px] p-[25px] w-[1283px] bg-[#F7F7F7]">
            <h2 className="font-medium text-[30px] leading-7 text-[#1F3A93]">
              How it Works
            </h2>
            <p className="font-normal text-xl leading-[30px] text-[#333333]">
              ShopRise: The premier local marketplace where simplicity meets trustworthiness. Elevate your buying and selling experience with us. Explore a plethora of exceptional deals in your vicinity, from elegant furniture and cutting-edge electronics to pristine vehicles. Discover the joy of purchasing directly from your neighbors, fostering community ties while you shop. Engage directly with sellers via our secure in-app messaging platform. Effortlessly negotiate prices and coordinate convenient meeting times, ensuring a seamless and professional transaction experience. Dive into user profiles to glean insights from ratings, badges, and a comprehensive transaction history. Make informed decisions with the confidence that you're interacting with credible members of our community. Transform your possessions into potential profit! Just snap a photo with your smartphone and post your item in under 30 seconds. Effortless listing, rapid results. Be part of a thriving community! Join millions of discerning individuals on the paramount mobile platform dedicated to local commerce. Where buyers meet sellers, and community connections are forged.
            </p>
          </div>
  
          {/* Stats Section */}
          <div className="flex flex-row flex-wrap gap-x-[75px] gap-y-[35px] p-5 w-[970px]">
            {/* Ads Stat */}
            <div className="flex flex-row items-center gap-[10px] w-[260px]">
              <div className="relative w-[100px] h-[100px]">
                <div className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V9C22 7.89543 21.1046 7 20 7Z" stroke="#1F3A93" strokeWidth="2"/>
                  <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke="#1F3A93" strokeWidth="2"/>
                  <path d="M8 17V19C8 20.1046 8.89543 21 10 21H14C15.1046 21 16 20.1046 16 19V17" stroke="#1F3A93" strokeWidth="2"/>
                </svg>
              </div>
              <div className="flex flex-col justify-center gap-[5px] w-[150px]">
                <div className="font-medium text-[40px] leading-[48px] text-[#333333]">5000+</div>
                <div className="font-normal text-[17px] leading-[21px] text-[#333333]">Ads</div>
              </div>
            </div>
  
            {/* Happy Customers Stat */}
            <div className="flex flex-row items-center gap-[10px] w-[260px]">
              <div className="relative w-[100px] h-[100px]">
                <div className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px]" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#1F3A93" strokeWidth="2"/>
                  <circle cx="9" cy="10" r="1.5" fill="#1F3A93"/>
                  <circle cx="15" cy="10" r="1.5" fill="#1F3A93"/>
                  <path d="M7 14C8 16 10 17 12 17C14 17 16 16 17 14" stroke="#1F3A93" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col justify-center gap-[5px] w-[150px]">
                <div className="font-medium text-[40px] leading-[48px] text-[#333333]">3264+</div>
                <div className="font-normal text-[17px] leading-[21px] text-[#333333]">Happy Customers</div>
              </div>
            </div>
  
            {/* Verified Users Stat */}
            <div className="flex flex-row items-center gap-[10px] w-[260px]">
              <div className="relative w-[100px] h-[100px]">
                <div className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px]" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#1F3A93" strokeWidth="2"/>
                  <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21" stroke="#1F3A93" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col justify-center gap-[5px] w-[150px]">
                <div className="font-medium text-[40px] leading-[48px] text-[#333333]">2001+</div>
                <div className="font-normal text-[17px] leading-[21px] text-[#333333]">Verified Users</div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Testimonials Section */}
        <div className="relative w-[999px] h-[393px]">
          <h2 className="absolute left-[320px] top-0 font-medium text-[30px] leading-9 text-[#1F3A93]">
            Customers Say About Us
          </h2>
          
          <div className="absolute top-[66px] left-0 flex flex-row gap-[60px]">
            {/* Testimonial Card 1 */}
            <div className="flex flex-col items-center p-5 gap-5 w-[293px] h-[327px] bg-[#F7F7F7] rounded-[10px]">
              <div className="w-[70px] h-[70px] rounded-full border border-black bg-gray-300 overflow-hidden">
                <img src="/david-le.svg" alt="David Lee" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-center gap-[5px]">
                <div className="font-semibold text-[21.875px] leading-[26px] text-center text-[#333333]">
                  David Lee
                </div>
                <div className="font-normal text-[15px] leading-[18px] text-center text-[#FF7F50]">
                  Director, AutoSale
                </div>
              </div>
              <div className="w-[234px] border-t border-[#D3D3D3]"></div>
              <p className="font-normal text-base leading-[19px] text-center text-[#333333]">
                We a dealer car company and sell a lot of cars here. Thanks
              </p>
            </div>
  
            {/* Testimonial Card 2 */}
            <div className="flex flex-col items-center p-5 gap-5 w-[293px] h-[327px] bg-[#F7F7F7] rounded-[10px]">
              <div className="w-[70px] h-[70px] rounded-full border border-black bg-gray-300 overflow-hidden">
                <img src="/david-le.svg" alt="David Lee" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-center gap-[5px]">
                <div className="font-semibold text-[21.875px] leading-[26px] text-center text-[#333333]">
                  David Lee
                </div>
                <div className="font-normal text-[15px] leading-[18px] text-center text-[#FF7F50]">
                  Director, AutoSale
                </div>
              </div>
              <div className="w-[234px] border-t border-[#D3D3D3]"></div>
              <p className="font-normal text-base leading-[19px] text-center text-[#333333]">
                We a dealer car company and sell a lot of cars here. Thanks
              </p>
            </div>
  
            {/* Testimonial Card 3 */}
            <div className="flex flex-col items-center p-5 gap-5 w-[293px] h-[327px] bg-[#F7F7F7] rounded-[10px]">
              <div className="w-[70px] h-[70px] rounded-full border border-black bg-gray-300 overflow-hidden">
                <img src="/david-le.svg" alt="David Lee" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-center gap-[5px]">
                <div className="font-semibold text-[21.875px] leading-[26px] text-center text-[#333333]">
                  David Lee
                </div>
                <div className="font-normal text-[15px] leading-[18px] text-center text-[#FF7F50]">
                  Director, AutoSale
                </div>
              </div>
              <div className="w-[234px] border-t border-[#D3D3D3]"></div>
              <p className="font-normal text-base leading-[19px] text-center text-[#333333]">
                We a dealer car company and sell a lot of cars here. Thanks
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }