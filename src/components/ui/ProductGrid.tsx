import { FC } from 'react';
import ProductCard from './ProductCard';

export interface Product {
  id: string;
  name: string;        // Changed from title
  image: string;
  price: number;
  category: string;
  color: string[];     // Array of strings
  size: string[];      // Array of strings
  type: string[];      // Array of strings
  isNew?: boolean;     // Changed from badge
  tags?: string[];
  createdAt?: string;
}

interface ProductGridProps {
  products: Product[];
  view: 'grid' | 'list';
}

const ProductGrid: FC<ProductGridProps> = ({ products, view }) => {
  if (products.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500">No products found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className={
      view === 'grid'
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        : 'space-y-4'
    }>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.name}  // Changed from title to name
          image={product.image}
          price={product.price}
          badge={product.isNew ? 'new' : undefined}
        />
      ))}
    </div>
  );
};

export default ProductGrid;