import { FC, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiTrash2 } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

interface FilterSidebarProps {
  onFilterChange: (filterType: string, value: string, checked: boolean) => void;
  onPriceChange: (price: number) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
  onSearchChange: (value: string) => void;
}

const FilterSidebar: FC<FilterSidebarProps> = ({
  onFilterChange,
  onPriceChange,
  onApplyFilters,
  onClearFilters,
  onSearchChange
}) => {
  const [typeOpen, setTypeOpen] = useState(true);
  const [colorOpen, setColorOpen] = useState(true);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [priceValue, setPriceValue] = useState(500);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, filterType: string) => {
    const { id, checked } = e.target;
    onFilterChange(filterType, id.replace('filter-', ''), checked);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPriceValue(value);
    onPriceChange(value);
  };

  const { category } = useParams<{ category: string }>();

  return (
    <div className="w-full ml-[5px]">
      <div className="mb-6">
        
        <a href='/'><h3 className="font-bold text-base mb-4 mt-6">Category</h3></a>
        <ul className="space-y-2 px-4">
          <li><a href="/category/t-shirt"  className={`text-sm ${
                category === "t-shirt" ? "text-primary font-medium" : "text-gray-500 hover:text-primary"
              }`}>T-Shirt</a></li>
          <li><a href="/category/sweatshirt" className={`text-sm ${
                category === "sweatshirt" ? "text-primary font-medium" : "text-gray-500 hover:text-primary"
              }`}>Sweatshirt</a></li>
          <li><a href="#" className="text-gray-500 hover:text-primary text-sm">Dress</a></li>
          <li><a href="#" className="text-gray-500 hover:text-primary text-sm">Pants and Skirt</a></li>
          <li><a href="#" className="text-gray-500 hover:text-primary text-sm">Swimsuit</a></li>
          <li><a href="#" className="text-gray-500 hover:text-primary text-sm">Stuff and Accessories</a></li>
        </ul>
      </div>

      <div style={{ borderBottom: '3px solid #f1f1f1', marginRight: '15px' }}></div>

      <div>
        <h3 className="font-bold text-base mb-0 mt-6">Filter by :</h3>

        <div className="filter-section">
          <div className="filter-title mb-4 pr-4" onClick={() => setTypeOpen(!typeOpen)}>
            <span className="font-medium">Type</span>
            {typeOpen ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {typeOpen && (
            <div className="filter-list space-y-4">
              {['basic', 'pattern', 'hoodie', 'zipper', 'oversize'].map((type) => (
                <div key={type} className="flex items-center">
                  <input
                    id={`filter-${type}`}
                    type="checkbox"
                    className="filter-checkbox"
                    onChange={(e) => handleCheckboxChange(e, 'type')}
                  />
                  <label htmlFor={`filter-${type}`} className="filter-label">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ borderBottom: '3px solid #f1f1f1', marginRight: '15px' }}></div>

        <div className="filter-section">
          <div className="filter-title mb-4 pr-4" onClick={() => setColorOpen(!colorOpen)}>
            <span className="font-medium">Colour</span>
            {colorOpen ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {colorOpen && (
            <div className="filter-list space-y-4">
              {[
                { id: 'black', color: 'bg-black' },
                { id: 'red', color: 'bg-red-600' },
                { id: 'brown', color: 'bg-amber-800' },
                { id: 'multicolor', color: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' },
                { id: 'grey', color: 'bg-gray-500' },
                { id: 'blue', color: 'bg-blue-500' }
              ].map(({ id, color }) => (
                <div key={id} className="flex items-center">
                  <input
                    id={`filter-${id}`}
                    type="checkbox"
                    className="filter-checkbox"
                    onChange={(e) => handleCheckboxChange(e, 'color')}
                  />
                  <label htmlFor={`filter-${id}`} className="filter-label">
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </label>
                  <span className={`w-6 h-2 ml-2 ${color} rounded-lg`}></span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ borderBottom: '3px solid #f1f1f1', marginRight: '15px' }}></div>

        <div className="filter-section">
          <div className="filter-title pr-4" onClick={() => setSizeOpen(!sizeOpen)}>
            <span>Size</span>
            {sizeOpen ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {sizeOpen && (
            <div className="filter-list space-y-4">
              {['xs', 's', 'm', 'l', 'xl'].map((size) => (
                <div key={size} className="flex items-center">
                  <input
                    id={`filter-${size}`}
                    type="checkbox"
                    className="filter-checkbox"
                    onChange={(e) => handleCheckboxChange(e, 'size')}
                  />
                  <label htmlFor={`filter-${size}`} className="filter-label">
                    {size.toUpperCase()}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ borderBottom: '3px solid #f1f1f1', marginRight: '15px' }}></div>

        <div className="filter-section">
          <div className="filter-title pr-4" onClick={() => setPriceOpen(!priceOpen)}>
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
                    max="500"
                    value={priceValue}
                    onChange={handlePriceChange}
                  />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">$0</span>
                  <span className="text-sm text-gray-500">${priceValue}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex space-x-2">
        <button
          className="flex-1 bg-primary text-white rounded-md py-2 text-sm font-medium"
          onClick={onApplyFilters}
        >
          Apply
        </button>
        <button
          className="p-2 border border-gray-300 rounded-md"
          onClick={onClearFilters}
        >
          <FiTrash2 className="text-gray-500" size={18} />
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;