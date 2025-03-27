import { FC } from 'react';
import { FiX } from 'react-icons/fi';

interface FilterTag {
  id: string;
  label: string;
  type: string;
}

interface ActiveFiltersProps {
  filters: FilterTag[];
  onRemoveFilter: (id: string) => void;
}

const ActiveFilters: FC<ActiveFiltersProps> = ({ filters, onRemoveFilter }) => {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 py-3">
      {filters.map((filter) => (
        <div
          key={filter.id}
          className="bg-gray-100 rounded-md text-sm flex items-center px-3 py-1.5"
        >
          <span className="text-gray-400 mr-1 text-sm">{filter.label}</span>
          <button
            onClick={() => onRemoveFilter(filter.id)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ActiveFilters;
