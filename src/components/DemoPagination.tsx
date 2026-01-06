export default function DemoPagination(){
return (
    <>
    {/* Pagination */}
    <div className="w-[414px] h-[47px] mx-auto mt-[20px] flex items-center justify-center gap-[70px]">
    {/* Previous Button */}
    <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900">
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
        <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>

    {/* Page Numbers */}
    <div className="flex items-center gap-3">
      <button className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-900 rounded font-medium">
        1
      </button>
      <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
        3
      </button>
      <span className="text-gray-600">...</span>
      <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
        9
      </button>
    </div>

    {/* Next Button */}
    <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900">
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
        <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
  </>
)
}