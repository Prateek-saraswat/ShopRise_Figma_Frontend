"use client";

import React, { useState } from "react";
import DemoPagination from '@/components/DemoPagination'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("View all");

  const categories = [
    "View all",
    "Technology News",
    "Health and Well-being",
    "Travel and Adventure",
    "Food",
  ];

  return (
    <div className="relative bg-white min-h-screen mb-12">
      {/* Knowledge Discovery Section */}
      <div className="min-w-[550px] mx-auto pt-[40px]  flex flex-col gap-[15px] items-center">
        {/* Heading */}
        <h1 className="w-[550px] text-center text-[32px] font-medium leading-[120%] text-blue-700 m-0">
          Discover the World of Knowledge with ShopRise
        </h1>

        {/* Paragraph */}
        <p className="w-full text-center text-base font-normal leading-[120%] text-gray-700 m-0">
          Join us in this exciting adventure of discovery and learning.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="w-[900px] h-[35px] mx-auto mt-[30px] flex items-center gap-[47px]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-blue-700 text-white"
                : "bg-transparent text-gray-700 hover:text-blue-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="w-[1131px] mx-auto p-6 mb-6 mt-[26px] rounded-[5px] grid grid-cols-3 gap-[12px]">
        {/* Blog Post 1 */}
        <div className="flex flex-col gap-[17px] ">
          <img
            src="/blog1.svg"
            alt="Blog image"
            className="w-[347px] min-h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* Blog Post 2 */}
        <div className=" flex flex-col gap-[17px]">
          <img
            src="/blog2.svg"
            alt="Blog image"
            className="w-[347px] min-h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* Blog Post 3 */}
        <div className=" flex flex-col gap-[17px]">
          <img
            src="/blog3.svg"
            alt="Blog image"
            className="w-[347px] min-h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* Blog Post 4 */}
        <div className=" flex flex-col gap-[17px]">
          <img
            src="/blog4.svg"
            alt="Blog image"
            className="w-[347px] min-h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* Blog Post 5 */}
        <div className=" flex flex-col gap-[17px]">
          <img
            src="/blog5.svg"
            alt="Blog image"
            className="w-[347px] min-h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* Blog Post 6 */}
        <div className=" flex flex-col gap-[17px] ">
          <img
            src="/blog6.svg"
            alt="Blog image"
            className="w-[347px] min-h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* Blog Post 7 */}
        <div className=" flex flex-col gap-[17px]">
          <img
            src="/blog7.svg"
            alt="Blog image"
            className="w-[347px] min-h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* Blog Post 8 */}
        <div className=" flex flex-col gap-[17px]">
          <img
            src="/blog8.svg"
            alt="Blog image"
            className="w-[347px] min-h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* Blog Post 9 */}
        <div className=" flex flex-col gap-[17px] ">
          <img
            src="/blog9.svg"
            alt="Blog image"
            className="w-[347px] min-h-[450px] object-contain rounded-lg"
          />
        </div>
      </div>
      <DemoPagination />

      {/* Rest of your blog content goes here */}
    </div>
  );
}
