'use client'
import { useState } from 'react'
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

// Generate 200 mock products
const generateProducts = (count: number) => {
  const products = []
  for (let i = 1; i <= count; i++) {
    products.push({
      id: i,
      name: 'Liter trolley sprayer',
      price: 9.99,
      condition: 'Used',
      location: 'Los Angeles,CA',
      category: 'Tools & Equipment',
      image: '/landingpg-product.png',
      isFavorite: false
    })
  }
  return products
}

const ITEMS_PER_PAGE = 35 // 6 columns x 6 rows

function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())
  
  const allProducts = generateProducts(200)
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE)
  
  // Calculate current items
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProducts = allProducts.slice(startIndex, endIndex)
  
  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId)
      } else {
        newFavorites.add(productId)
      }
      return newFavorites
    })
  }
  
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      // Scroll to top of grid
      window.scrollTo({ top: 278, behavior: 'smooth' })
    }
  }
  
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    
    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)
      
      if (currentPage > 3) {
        pages.push('...')
      }
      
      // Show pages around current page
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i)
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...')
      }
      
      // Always show last page
      pages.push(totalPages)
    }
    
    return pages
  }

  return (
    <div className="w-full max-w-[1229px] mx-auto py-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[19px] mb-8">
        {currentProducts.map((product) => (
          <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="block"
        >
          <div
            key={product.id}
            className="border border-[#D3D3D3] rounded-[10px] p-[10px] hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col items-center gap-[11px]">
              <div className="flex flex-col gap-[11px] w-full">
                {/* Product Image */}
                <div className="relative w-full h-[125px] bg-muted rounded-[10px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      className="w-4 h-4"
                      fill={favorites.has(product.id) ? '#FF7F50' : 'none'}
                      stroke={favorites.has(product.id) ? '#FF7F50' : '#333333'}
                      strokeWidth={2}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-[2px] w-full">
                  {/* Product Name */}
                  <h3 className="text-[14px] font-medium leading-[17px] text-[#FF7F50] truncate">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-end gap-[5px]">
                    <span className="text-[12px] font-medium leading-[15px] text-[#1F3A93]">
                      ${product.price}
                    </span>
                    <span className="text-[11px] font-normal leading-[13px] text-[#333333]">
                      ({product.condition})
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-end gap-[5px]">
                    <span className="text-[12px] font-normal leading-[15px] text-[#333333]">
                      {product.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-[70px]">
        {/* Left Arrow */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-[30px] h-[20px] bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-[10px] h-[10px] text-[#333333]" strokeWidth={3} />
        </button>

        {/* Page Numbers */}
        <div className="flex items-start gap-[10px] p-[10px]">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && goToPage(page)}
              disabled={page === '...'}
              className={`
                min-w-[27px] h-[27px] px-[10px] py-[5px] flex items-center justify-center text-[14px] font-normal leading-[17px] transition-colors
                ${page === currentPage 
                  ? 'bg-[#D3D3D3] text-[#333333]' 
                  : 'bg-white text-[#333333] hover:bg-gray-50'
                }
                ${page === '...' ? 'cursor-default' : 'cursor-pointer'}
              `}
              aria-label={page === '...' ? 'More pages' : `Go to page ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-[30px] h-[20px] bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-[10px] h-[10px] text-[#333333]" strokeWidth={3} />
        </button>
      </div>
    </div>
  )
}

export default ProductGrid
