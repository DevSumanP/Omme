import { FC } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Header from '../components/layout/Header';
import Breadcrumb from '../components/ui/Breadcrumb';

const ProductDetailPage: FC = () => {
  const breadcrumbItems = [
    { label: 'Category', href: '/category' },
    { label: 'Sweatshirt', href: '/category/sweatshirt' },
    { label: 'Brooklyn-NYC Sweatshirt', href: '/product/brooklyn-nyc-sweatshirt', current: true }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Product Info */}
          <div className="flex flex-col justify-center p-12 md:p-20">
            <h1 className="text-2xl md:text-3xl font-bold">Brooklyn-NYC Sweatshirt</h1>

            <div className="flex items-center mt-4">
              <span className="text-2xl font-bold">$200</span>
              <span className="text-lg line-through text-gray-400 ml-2">$250</span>
            </div>

            <button className="bg-primary text-white py-3 px-6 rounded-md flex items-center justify-center mt-8 w-fit">
              <FiShoppingCart className="mr-2" size={20} />
              <span className="sr-only">Add to Cart</span>
            </button>
          </div>

          {/* Right Column - Product Image with Dark Background */}
          <div className="bg-zinc-800 min-h-[calc(100vh-80px)] flex items-center justify-center">
            <div className="w-full max-w-md mx-auto p-8">
              <img
                src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Brooklyn-NYC Sweatshirt"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;
