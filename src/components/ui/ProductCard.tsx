import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LuHeart, LuShoppingBasket } from 'react-icons/lu';

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: 'new' | 'hot' | 'best';
  isWishlisted?: boolean;
  slug?: string;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  image,
  price,
  oldPrice,
  badge,
  isWishlisted = false,
  slug
}) => {
  // Default slug to a URL-friendly version of the title if not provided
  const productSlug = slug || title.toLowerCase().replace(/\s+/g, '-');
  const productUrl = `/product/${productSlug}`;

  return (
    <div className="product-card group">
      {/* Product Badge */}
      {badge && (
        <div className="absolute top-2 left-2 z-10">
          {badge === 'new' && <span className="badge-new">NEW</span>}
          {badge === 'hot' && <span className="badge-hot">HOT PROMO</span>}
          {badge === 'best' && <span className="badge-best">BEST SELLER</span>}
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <LuHeart
          size={20}
          className={isWishlisted ? "text-red-500" : "text-gray-400 hover:text-red-500"}
        />
      </button>

      {/* Product Image with Link */}
      <Link to={productUrl} className="block relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="product-image transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Product Info */}
      <div className="p-3 border-2 border-solid border-gray-100 border-t-0 rounded-b-lg">
        <Link to={productUrl} className="block">
          <h3 className="product-title hover:text-primary transition-colors">{title}</h3>
        </Link>
        <div className="mt-1 flex justify-between items-center">
          <div className="flex items-start flex-col">
            <span className="price text-gray-400 text-[12px]">Price:</span>
            <div className="flex flex-wrap items-center">
            <span className="product-price mr-2">${price}</span>
            {oldPrice && (
              <span className="product-price-old">${oldPrice}</span>
            )}
            </div>
          </div>
          <button className="btn-cart p-2">
            <LuShoppingBasket
             size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
