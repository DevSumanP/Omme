import { FC } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; // Show max 5 page numbers

    // Always include page 1
    pages.push(1);

    // Add current page and neighbors
    if (currentPage > 3) {
      pages.push(-1); // -1 represents ellipsis
    }

    // Add pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (pages.indexOf(i) === -1) {
        pages.push(i);
      }
    }

    // Add ellipsis if there's a gap before the last page
    if (currentPage < totalPages - 2) {
      pages.push(-1); // -1 represents ellipsis
    }

    // Always include the last page if it's not already included
    if (totalPages > 1 && pages.indexOf(totalPages) === -1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center mt-8 space-x-1">
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1.5 rounded-md ${
          currentPage === 1
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        aria-label="Previous page"
      >
        <span className="sr-only">Previous</span>
        <FiChevronLeft size={18} />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => {
        if (page === -1) {
          return (
            <span
              key={`ellipsis-${index}`}
              className="px-3 py-1.5 text-gray-500"
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-md text-sm ${
              currentPage === page
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1.5 rounded-md ${
          currentPage === totalPages
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        aria-label="Next page"
      >
        <span className="sr-only">Next</span>
        <FiChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
