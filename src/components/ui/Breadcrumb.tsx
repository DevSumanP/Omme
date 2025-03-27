import { FC } from 'react';
import { FiChevronRight } from "react-icons/fi";
import { HugeiconsIcon } from '@hugeicons/react';
import { Home01FreeIcons } from '@hugeicons/core-free-icons';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex py-3 mt-3" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="inline-flex items-center text-sm text-gray-400 hover:text-gray-700"
          >
            <HugeiconsIcon icon={Home01FreeIcons} className="mr-2 text-gray-400" size={16} />
            Main Page
          </a>
        </li>

        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <FiChevronRight className="w-3 h-3 text-gray-400 " />
              <a
                href={item.href}
                className={`ml-1 text-sm ${
                  item.current
                    ? "text-gray-400 font-medium"
                    : "text-gray-400 hover:text-gray-700"
                }`}
                aria-current={item.current ? "page" : undefined}
              >
                {item.label}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;