import { FC, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiTrash2 } from 'react-icons/fi';

const FilterSidebar: FC = () => {
  const [typeOpen, setTypeOpen] = useState(true);
  const [colorOpen, setColorOpen] = useState(true);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [oversizeChecked, setOversizeChecked] = useState(true);
  const [multicolorChecked, setMulticolorChecked] = useState(true);

  return (
    <div className="w-full ">
      {/* Category */}
      <div className="mb-6">
        <h3 className="font-bold text-base mb-4 mt-6">Category</h3>
        <ul className="space-y-2 px-4">
          <li>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">T-Shirt</a>
          </li>
          <li>
            <a href="#" className="text-primary font-medium text-sm">Sweatshirt</a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">Dress</a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">Pants and Skirt</a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">Swimsuit</a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">Stuff and Accessories</a>
          </li>
        </ul>
      </div>

      <div style={{ borderBottom: '3px solid #f1f1f1', margin: '10px' }}></div>

      {/* Filter By */}
      <div>
        <h3 className="font-bold text-base mb-0 mt-6">Filter by :</h3>

        {/* Type */}
        <div className="filter-section">
          <div
            className="filter-title mb-4 pr-4"
            onClick={() => setTypeOpen(!typeOpen)}
          >
            <span className="font-bold">Type</span>
            {typeOpen ? <FiChevronUp /> : <FiChevronDown />}
          </div>

          {typeOpen && (
            <div className="filter-list space-y-4">
              <div className="flex items-center">
                <input
                  id="filter-basic"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-basic" className="filter-label">Basic</label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-pattern"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-pattern" className="filter-label">Pattern</label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-hoodie"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-hoodie" className="filter-label">Hoodie</label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-zipper"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-zipper" className="filter-label">Zipper</label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-oversize"
                  type="checkbox"
                  className="filter-checkbox"
                  checked={oversizeChecked}
                  onChange={() => setOversizeChecked(!oversizeChecked)}
                />
                <label htmlFor="filter-oversize" className="filter-label">Oversize</label>
              </div>
            </div>
          )}
        </div>

        <div style={{ borderBottom: '3px solid #f1f1f1', margin: '10px' }}></div>

        {/* Color */}
        <div className="filter-section">
          <div
            className="filter-title mb-4 pr-4"
            onClick={() => setColorOpen(!colorOpen)}
          >
            <span className='font-bold'>Colour</span>
            {colorOpen ? <FiChevronUp /> : <FiChevronDown />}
          </div>

          {colorOpen && (
            <div className="filter-list">
              <div className="flex items-center">
                <input
                  id="filter-black"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-black" className="filter-label">Black</label>
                <span className="w-6 h-2 ml-2 bg-black rounded-lg"></span>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-red"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-red" className="filter-label">Red</label>
                <span className="w-6 h-2 ml-2 bg-red-600 rounded-lg"></span>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-brown"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-brown" className="filter-label">Brown</label>
                <span className="w-6 h-2 ml-2 bg-amber-800 rounded-lg"></span>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-multicolor"
                  type="checkbox"
                  className="filter-checkbox"
                  checked={multicolorChecked}
                  onChange={() => setMulticolorChecked(!multicolorChecked)}
                />
                <label htmlFor="filter-multicolor" className="filter-label">Multicolour</label>
                <span className="w-6 h-2 ml-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg"></span>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-grey"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-grey" className="filter-label">Grey</label>
                <span className="w-6 h-2 ml-2 bg-gray-500 rounded-lg"></span>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-blue"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-blue" className="filter-label">Blue</label>
                <span className="w-6 h-2 ml-2 bg-blue-500 rounded-lg"></span>
              </div>
            </div>
          )}
        </div>

        <div style={{ borderBottom: '3px solid #f1f1f1', margin: '10px' }}></div>

        {/* Size */}
        <div className="filter-section">
          <div
            className="filter-title pr-4"
            onClick={() => setSizeOpen(!sizeOpen)}
          >
            <span>Size</span>
            {sizeOpen ? <FiChevronUp /> : <FiChevronDown />}
          </div>

          {sizeOpen && (
            <div className="filter-list">
              <div className="flex items-center">
                <input
                  id="filter-xs"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-xs" className="filter-label">XS</label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-s"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-s" className="filter-label">S</label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-m"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-m" className="filter-label">M</label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-l"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-l" className="filter-label">L</label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-xl"
                  type="checkbox"
                  className="filter-checkbox"
                />
                <label htmlFor="filter-xl" className="filter-label">XL</label>
              </div>
            </div>
          )}
        </div>


        <div style={{ borderBottom: '3px solid #f1f1f1', margin: '10px' }}></div>

        {/* Price */}
        <div className="filter-section">
          <div
            className="filter-title pr-4"
            onClick={() => setPriceOpen(!priceOpen)}
          >
            <span>Price</span>
            {priceOpen ? <FiChevronUp /> : <FiChevronDown />}
          </div>

          {priceOpen && (
            <div className="filter-list">
              <div className="space-y-4">
                <div>
                  <input
                    type="range"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    min="0"
                    max="100"
                  />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">$0</span>
                  <span className="text-sm text-gray-500">$500</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-6 flex space-x-2">
        <button className="flex-1 bg-primary text-white rounded-md py-2 text-sm font-medium">
          Apply
        </button>
        <button className="p-2 border border-gray-300 rounded-md">
          <FiTrash2 className="text-gray-500" size={18} />
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
