import { FC } from 'react';
import ProductCard from './ProductCard';

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: 'new' | 'hot' | 'best';
  isWishlisted?: boolean;
  slug?: string;  // Add slug property to the interface
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
          title={product.title}
          image={product.image}
          price={product.price}
          oldPrice={product.oldPrice}
          badge={product.badge}
          isWishlisted={product.isWishlisted}
          slug={product.slug}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
