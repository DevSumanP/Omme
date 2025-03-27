import { FC, useState } from 'react';
import Header from '../components/layout/Header';
import Breadcrumb from '../components/ui/Breadcrumb';
import FilterSidebar from '../components/ui/FilterSidebar';
import ActiveFilters from '../components/ui/ActiveFilters';
import ProductSort from '../components/ui/ProductSort';
import ProductGrid, { Product } from '../components/ui/ProductGrid';
import Pagination from '../components/ui/Pagination';

const SweatshirtPage: FC = () => {
  const [filters, setFilters] = useState([
    { id: '1', label: 'Oversize', type: 'type' },
    { id: '2', label: 'Multicolour', type: 'color' }
  ]);
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [currentSort, setCurrentSort] = useState('most-popular');
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 20;

  const breadcrumbItems = [
    { label: 'Category', href: '/category' },
    { label: 'Sweatshirt', href: '/category/sweatshirt', current: true }
  ];

  // Mock product data
  const products: Product[] = [
    {
      id: '1',
      title: 'Line-Pattern Zipper Sweatshirt',
      image: 'https://cdn.aboutstatic.com/file/images/20edd0f29cf0a28dd6051b221ceafd13.jpg?quality=75&fit=crop&w=687&q=80',
      price: 200,
      badge: 'new'
    },
    {
      id: '2',
      title: 'Black Fantasy Sweatshirt',
      image: 'https://cdn.aboutstatic.com/file/images/f4081ced389855596ea46e3582eccae9.jpg?quality=75npm run dev&fit=crop&w=687&q=80',
      price: 200
    },
    {
      id: '3',
      title: 'Brooklyn-NYC Sweatshirt',
      image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=711&q=80',
      price: 200,
      oldPrice: 250,
      badge: 'best',
      slug: 'brooklyn-nyc-sweatshirt' // Add a specific slug for this product
    },
    {
      id: '4',
      title: 'Basic Plain Shirt',
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      price: 200,
      oldPrice: 220,
      badge: 'hot'
    },
    {
      id: '5',
      title: 'Basic Orange Sweatshirt',
      image: 'https://images.unsplash.com/photo-1611911813383-67769b37a149?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      price: 200,
      badge: 'new'
    },
    {
      id: '6',
      title: 'Alui Sweatshit X Alvent G',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
      price: 200
    },
    {
      id: '7',
      title: 'Flowers Printed Sweatshirt',
      image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      price: 200,
      oldPrice: 220,
      badge: 'hot'
    },
    {
      id: '8',
      title: 'Relaxed Fit Printed Sweatshirt',
      image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=711&q=80',
      price: 200,
      badge: 'new'
    },
    {
      id: '9',
      title: 'Letter Pattern Knitted Vest',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c7c54a69?ixlib=rb-4.0.3&auto=format&fit=crop&w=715&q=80',
      price: 200
    }
  ];

  const handleRemoveFilter = (id: string) => {
    setFilters(filters.filter(filter => filter.id !== id));
  };

  const handleSortChange = (value: string) => {
    setCurrentSort(value);
  };

  const handleViewChange = (view: 'grid' | 'list') => {
    setCurrentView(view);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4">

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-[20%] w-full border-r-2 border-solid border-[#f1f1f1]">
            <FilterSidebar />
          </div>

          {/* Main content */}
          <div className="lg:w-3/4 w-full">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            <div className="flex justify-between items-center mt-4 mb-2">
              {/* Page title */}
              <h1 className="text-2xl font-bold">Sweatshirt</h1>
              {/* Sorting and View Controls */}
              <ProductSort
                currentSort={currentSort}
                currentView={currentView}
                onSortChange={handleSortChange}
                onViewChange={handleViewChange}
              />
            </div>
            {/* Active Filters */}
            <ActiveFilters
              filters={filters}
              onRemoveFilter={handleRemoveFilter}
            />



            {/* Product Grid */}
            <div className="mt-6">
              <ProductGrid
                products={products}
                view={currentView}
              />
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SweatshirtPage;
