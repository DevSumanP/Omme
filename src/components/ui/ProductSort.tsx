import { FC, useState } from 'react';
import { LuAlignJustify, LuLayoutGrid } from 'react-icons/lu';
import { HugeiconsIcon } from '@hugeicons/react';
import { AlignLeftFreeIcons, LayoutGridFreeIcons } from '@hugeicons/core-free-icons';


interface ProductSortProps {
  onSortChange: (value: string) => void;
  onViewChange: (view: 'grid' | 'list') => void;
  currentView: 'grid' | 'list';
  currentSort: string;
}

const ProductSort: FC<ProductSortProps> = ({
  onSortChange,
  onViewChange,
  currentView,
  currentSort
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const sortOptions = [
    { value: 'most-popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' }
  ];

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleSortChange = (value: string) => {
    onSortChange(value);
    setShowDropdown(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-md">
      <div className="text-sm text-gray-500">
        <span>Sort by:</span>
        <div className="relative inline-block ml-2">
          <button
            className="flex items-center font-medium text-gray-800 mr-6"
            onClick={toggleDropdown}
          >
            {sortOptions.find(option => option.value === currentSort)?.label || 'Most Popular'}
            
          </button>

          {showDropdown && (
            <div className="absolute left-0 top-full mt-1 bg-white shadow-md rounded-md py-1 z-50 w-48">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  className={`block w-full text-left px-4 py-2 text-sm ${currentSort === option.value
                    ? 'bg-gray-100 text-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  onClick={() => handleSortChange(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        className="p-1.5 rounded-md text-gray-800 hover:text-gray-300 transition-colors"
        onClick={() => onViewChange(currentView === 'grid' ? 'list' : 'grid')}
        aria-label={`Switch to ${currentView === 'grid' ? 'list' : 'grid'} view`}
      >
        {currentView === 'grid' ? <LuAlignJustify className='text-gray-400' size={16} /> : <LuLayoutGrid className='text-gray-400' size={16} />}
      </button>
    </div>
  );
};

export default ProductSort;
