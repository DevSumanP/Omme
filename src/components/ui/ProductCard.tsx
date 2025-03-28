import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LuHeart, LuShoppingBasket } from 'react-icons/lu';

interface ProductCardProps {
  id: string;
  title: string;  // Using title as prop since it's expected by the component
  image: string;
  price: number;
  badge?: 'new' | 'hot' | 'best';
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  image,
  price,
  badge
}) => {
  const productSlug = title.toLowerCase().replace(/\s+/g, '-');
  const productUrl = `/product/${productSlug}`;

  return (
    <div className="product-card group">
      {badge && (
        <div className="absolute top-2 left-2 z-10">
          {badge === 'new' && <span className="badge-new">NEW</span>}
          {badge === 'hot' && <span className="badge-hot">HOT PROMO</span>}
          {badge === 'best' && <span className="badge-best">BEST SELLER</span>}
        </div>
      )}

      <button className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <LuHeart size={20} className="text-gray-400 hover:text-red-500" />
      </button>

      <Link to={productUrl} className="block relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="product-image transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="p-3 border-2 border-solid border-gray-100 border-t-0 rounded-b-lg">
        <Link to={productUrl} className="block">
          <h3 className="product-title hover:text-primary transition-colors">{title}</h3>
        </Link>
        <div className="mt-1 flex justify-between items-center">
          <div className="flex items-start flex-col">
            <span className="price text-gray-400 text-[12px]">Price:</span>
            <div className="flex flex-wrap items-center">
              <span className="product-price mr-2">${price}</span>
            </div>
          </div>
          <button className="btn-cart p-2">
            <LuShoppingBasket size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;