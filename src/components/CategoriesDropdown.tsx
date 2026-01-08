export default function CategoriesDropdown() {
    const categories = [
      "Antiques & Collectibles",
      "Appliance",
      "Arts & Crafts",
      "Auto Parts",
      "Baby",
      "Books, Movies & Music",
      "Home Improvement & Tools",
      "Electronics",
      "Furniture",
      "Garage Sale",
      "Health & Beauty",
      "Home Goods & Decor",
      "Housing for Sale",
      "Jewelry & Watches",
      "Kidswear & Baby",
      "Luggage & Bags",
      "Menswear",
      "Miscellaneous",
      "Musical instruments",
      "Patio & Garden",
      "Pet Supplies",
      "Rentals",
      "Sporting Goods",
      "Vehicles",
      "Womenswear"
    ];
  
    return (
      <div className="flex flex-col items-start py-[10px] gap-[5px] relative w-[299px] h-[815px] bg-white border border-[#D3D3D3] shadow-[0px_1px_20px_rgba(0,0,0,0.25)] rounded-[10px] overflow-y-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-row justify-center items-center py-[5px] px-[10px] pl-[15px] gap-[10px] w-[299px] h-[27px] bg-white hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <span className="font-normal text-sm leading-[17px] text-black w-[274px]">
              {category}
            </span>
          </div>
        ))}
      </div>
    );
  }