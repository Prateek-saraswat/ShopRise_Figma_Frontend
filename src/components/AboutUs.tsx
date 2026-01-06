'use client';

import React from 'react';

export default function AboutUs() {
  const stats = [
    { icon: '🏷️', number: '5000+', label: 'Ads' },
    { icon: '😊', number: '3264+', label: 'Happy Customers' },
    { icon: '👤', number: '2001+', label: 'Verified Users' }
  ];

  const testimonials = [
    {
      name: 'David Lee',
      role: 'Director, AutoSale',
      image: '/testimonial-1.jpg',
      text: 'We a dealer car company and sell a lot of cars here. Thanks'
    },
    {
      name: 'David Lee',
      role: 'Director, AutoSale',
      image: '/testimonial-2.jpg',
      text: 'We a dealer car company and sell a lot of cars here. Thanks'
    },
    {
      name: 'David Lee',
      role: 'Director, AutoSale',
      image: '/testimonial-3.jpg',
      text: 'We a dealer car company and sell a lot of cars here. Thanks'
    }
  ];

  return (
    <div className="bg-white py-4" style={{ transform: 'scale(0.9)', transformOrigin: 'top center' }}>
      <div className="max-w-7xl  px-2">
        {/* Main Content Container */}
        <div style={{ width: '1283px' }} className="flex flex-col ">
          
          {/* Top Section with Text and Image */}
          <div style={{ width: '1228px' }} className="flex flex-col">
            
            {/* Hero Section with Image */}
            <div className="flex gap-2 mb-8">
              {/* Left Content */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-blue-900 mb-6">
                  About ShopRise – Elevating Your Local Shopping Experience
                </h1>
                
                <p className="text-gray-700 mb-4">
                  Welcome to <span className="text-orange-500 font-semibold">ShopRise</span>, your premier Local Marketplace
                </p>
                
                <p className="text-gray-700 mb-6">
                  ShopRise isn't just a marketplace; it's a community revolutionizing local buying and selling.
                </p>
                
                <p className="text-gray-700 mb-8">
                  Founded in 2023, ShopRise has swiftly become a leading mobile marketplace for local buyers and sellers across the U.S. Our mission is clear: to create the most reliable and user-friendly local marketplace, empowering our users to engage in transactions with confidence and ease.
                </p>
                
                {/* Our Journey */}
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Journey</h2>
                <p className="text-gray-700 mb-8">
                  ShopRise started with a vision to streamline the local buying and selling process, making it as straightforward and safe as possible. Our platform is built on the belief that everyone deserves access to a marketplace that is not just efficient but also secure and centered around the community.
                </p>
                
                {/* Why ShopRise? */}
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Why ShopRise?</h2>
                
                <div className="space-y-4 mb-8">
                  <p className="text-gray-700">
                    <span className="text-orange-500 font-semibold">Trust and Safety:</span> We prioritize your safety with features like secure messaging, verified community meet-up spots, and a comprehensive rating system.
                  </p>
                  
                  <p className="text-gray-700">
                    <span className="text-orange-500 font-semibold">Ease of Use:</span> Our app's intuitive design makes buying and selling a breeze—just a few taps and you're set!
                  </p>
                  
                  <p className="text-gray-700">
                    <span className="text-orange-500 font-semibold">Eco-Friendly:</span> Promoting local transactions helps reduce environmental impact, supporting sustainability.
                  </p>
                  
                  <p className="text-gray-700">
                    <span className="text-orange-500 font-semibold">Community-Centric:</span> At ShopRise, we're building more than a platform; we're nurturing a community, fostering connections that enrich local neighborhoods.
                  </p>
                </div>
                
                {/* Visioning the Future */}
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Visioning the Future</h2>
                <p className="text-gray-700 mb-8">
                  Looking forward, ShopRise is dedicated to innovating and enhancing our services. Our aim is to broaden our reach, ensuring every user experience is seamless, secure, and satisfying. We're not just developing a marketplace; we're cultivating a community where everyone can find value and connection.
                </p>
                
                {/* Join the ShopRise Community */}
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Join the ShopRise Community</h2>
                <p className="text-gray-700">
                  Whether you're decluttering, hunting for a bargain, or starting a local business venture, ShopRise is your go-to platform. Download our app today and join a thriving community of users who choose ShopRise for all their local{' '}
                  <a href="#" className="text-orange-500 underline">buying and selling needs.</a>
                </p>
              </div>
              
              {/* Right Image */}
              <div className="w-[450px] h-[300px] flex-shrink-0">
                <img
                  src="/about-team.png"
                  alt="ShopRise Team"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* How it Works Section */}
          <div style={{ width: '1283px', height: '463px', gap: '25px', padding: '25px' }} className="bg-gray-50 rounded-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">How it Works</h2>
            
            <p className="text-gray-700 mb-6">
              ShopRise: The premier local marketplace where simplicity meets trustworthiness. Elevate your buying and selling experience with us.
            </p>
            
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>
                Explore a plethora of exceptional deals in your vicinity, from elegant furniture and cutting-edge electronics to pristine vehicles. Discover the joy of purchasing directly from your neighbors, fostering community ties while you shop.
              </li>
              <li>
                Engage directly with sellers via our secure in-app messaging platform. Effortlessly negotiate prices and coordinate convenient meeting times, ensuring a seamless and professional transaction experience.
              </li>
              <li>
                Dive into user profiles to glean insights from ratings, badges, and a comprehensive transaction history. Make informed decisions with the confidence that you're interacting with credible members of our community.
              </li>
              <li>
                Transform your possessions into potential profit! Just snap a photo with your smartphone and post your item in under 30 seconds. Effortless listing, rapid results.
              </li>
              <li>
                Be part of a thriving community! Join millions of discerning individuals on the paramount mobile platform dedicated to local commerce. Where buyers meet sellers, and community connections are forged.
              </li>
            </ol>
          </div>
          
          {/* Stats Section */}
          <div
            className=" mx-auto h-[300px] w-full bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/about-statss.svg')" }}
          >
          </div>
          
          {/* Testimonials Section */}
          <div
            className=" mx-auto h-[400px] w-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/testimoniall.svg')" }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}