import { FC } from "react";

interface FilterTag {
  id: string;
  label: string;
  type: string;
}

interface ActiveFiltersProps {
  filters: FilterTag[];
  onRemoveFilter: (id: string, type: string) => void;
}

const ActiveFilters: FC<ActiveFiltersProps> = ({ filters, onRemoveFilter }) => {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 pb-3">
      {filters.map((filter) => (
        <div
          key={filter.id}
          className="bg-gray-100 rounded-md text-sm flex items-center px-3 py-1.5"
        >
          <span className="text-gray-400 mr-1 text-[13px]">{filter.label}</span>
          <button
            onClick={() => onRemoveFilter(filter.id, filter.type)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default ActiveFilters;