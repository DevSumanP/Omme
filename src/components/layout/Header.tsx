import { FC } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { HugeiconsIcon } from '@hugeicons/react';
import { FavouriteFreeIcons, Search01FreeIcons, ShoppingCart01FreeIcons, User02FreeIcons } from '@hugeicons/core-free-icons';

const Header: FC = () => {
  return (
    <header className="border-b-2 border-solid border-[#f1f1f1]">
      <div className="container mx-auto px-4 flex">
        {/* Logo Container - 25% width */}
        <div className="w-[20%] border-r-2 border-solid border-[#f1f1f1] flex items-center py-3">
          <a href="/" className="flex items-center">
            <div className="bg-primary p-1 rounded mr-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-lg">lapak</span>
            <span className="font-bold text-lg">baju</span>
          </a>
        </div>

        {/* Search and Navigation Container - Remaining width */}
        <div className="flex-1 flex items-center justify-between py-3">
          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6 relative">
            <input
              type="text"
              placeholder="Search among 100+ products"
              className="w-full py-[10px] pl-10 pr-4 bg-[#f1f1f1] text-[14px] rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HugeiconsIcon icon={Search01FreeIcons} className="text-gray-400" size={16} />
            </div>
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2L2 14M2 2L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6 py-3">
            {/* Language Selector */}
            <div className="flex align-center items-center cursor-pointer">
              <span className="text-xs text-gray-400 font-medium">ENG</span>
              <FiGlobe className="ml-1 text-gray-400 " size={16} />
            </div>

            {/* Wishlist */}
            <div className="flex flex-wrap gap-2 py-3">
              <button
                onClick={() => { }}
                className="text-gray-400  transition-colors">
                <HugeiconsIcon icon={FavouriteFreeIcons} size={20} />
              </button>
            </div>

            {/* Cart */}
            <div className="flex flex-wrap gap-2 py-3">
              <button
                onClick={() => { }}
                className="text-gray-400  transition-colors">
                <HugeiconsIcon icon={ShoppingCart01FreeIcons} size={20} />
              </button>
            </div>


            {/* User */}
            <button className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <HugeiconsIcon icon={User02FreeIcons} size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;