import { FC, useCallback, useEffect, useState } from 'react';
import { FiGlobe, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { HugeiconsIcon } from '@hugeicons/react';
import { Search01FreeIcons } from '@hugeicons/core-free-icons';
import logo from '../../assets/omme-logo.png';
import avatar from '../../assets/avatar.png';

const Header: FC = () => {
  function handleWishlistClick(): void {
    throw new Error('Function not implemented.');
  }

  function handleCartClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <header className="border-b-2 border-solid border-[#f1f1f1]">
      <div className="container mx-auto px-4 flex">
        {/* Logo Container - 25% width */}
        <div className="w-[20%] border-r-2 border-solid border-[#f1f1f1] flex items-center py-2 justify-center">
          <a href="/" className="flex items-center">

            <div className="p-1 rounded mr-1">
              {/* Use the logo in an <img> tag */}
              <img src={logo} alt="Logo" className="h-20 w-auto" />
            </div>
          </a>
        </div>

        {/* Search and Navigation Container - Remaining width */}
        <div className="flex-1 flex items-center justify-between py-3">
          {/* Search Bar */}
          <div className="w-[35%] mx-6 relative">
            <input
              type="text"
              
              placeholder="Search among 100+ products"
              className="w-full py-[13px] pl-10 pr-4 bg-gray-100 text-[13px] rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HugeiconsIcon icon={Search01FreeIcons} className="text-gray-400" size={20} />
            </div>
            <button className="absolute inset-y-0 right-0 p-[8px] m-[8px] flex items-center text-gray-400 bg-white rounded-lg">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2L2 14M2 2L14 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6 py-3 mr-6">
            {/* Language Selector */}
            <div className="flex align-center items-center cursor-pointer">
              <span className="text-sm text-gray-400 font-medium">ENG</span>
              <FiGlobe className="ml-2 text-gray-400 " size={20} />
            </div>

            {/* Wishlist */}
            <div className="flex flex-wrap gap-5 py-3">
              {/* <ButtonGroup
                onWishlistClick={handleWishlistClick}
                onCartClick={handleCartClick}
              /> */}
              <button className="flex items-center justify-center border-2 border-gray-100 rounded-full">
                <FiHeart className="m-2 text-gray-400 " size={18} />
              </button>
              <button className="flex items-center justify-center border-2 border-gray-100 rounded-full">
                <FiShoppingBag className="m-2 text-gray-400 " size={18} />
              </button>
            </div>


            {/* User */}
            <button className="flex items-center justify-center bg-gray-100 rounded-full">
              <img src={avatar} alt="Avatar" className='w-6 h-6 m-2' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

function setDebouncedSearch(searchTerm: string) {
  throw new Error('Function not implemented.');
}
