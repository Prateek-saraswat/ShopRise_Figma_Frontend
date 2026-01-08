'use client'

import { useState , useEffect} from 'react'
import SecondaryNav from '@/components/SecondaryNav'
import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard';
import SecondaryNavbar from '@/components/SecondaryNavBar';

export default function Dashboard(){
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 36; // 6 columns × 6 rows
  
    // Generate 200 products - Replace with your actual product data
    const allProducts = Array.from({ length: 200 }, (_, i) => ({
      id: i + 1,
      image: `/products/product-${(i % 10) + 1}.jpg`, // Replace with your actual image paths
      title: 'Liter trolley sprayer',
      price: '$9.99',
      condition: '(Used)',
      location: 'Los Angeles,CA'
    }));
  
    // Calculate pagination
    const totalPages = Math.ceil(allProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = allProducts.slice(startIndex, endIndex);
  
    // Handle page change
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    // Scroll to top on page change
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);
  
    return (
      <>
      {/* <SecondaryNav /> */}
    <SecondaryNavbar />

      <main className="py-2 min-h-screen bg-white">
        <div className="max-w-[1400px] mx-auto px-2">
          {/* Product Grid - 6 columns */}
          <div className="grid grid-cols-6 gap-y-4 gap-x-2">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                condition={product.condition}
                location={product.location}
              />
            ))}
          </div>
  
          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
  
          {/* Page Info */}
          {/* <div className="text-center text-gray-500 text-sm mt-4">
            Showing {startIndex + 1}-{Math.min(endIndex, allProducts.length)} of {allProducts.length} products
          </div> */}
        </div>
      </main>
      </>
    );
}