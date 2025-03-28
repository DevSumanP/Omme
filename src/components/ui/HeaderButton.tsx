import React from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

interface ButtonProps {
  label: string;
  icon?: React.ReactNode; 
  onClick?: () => void;
  className?: string; 
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center space-x-2 bg-purple-100 text-purple-800 text-[12px] font-medium py-3 px-4 rounded-lg hover:bg-purple-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <span>{label}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};


interface ButtonGroupProps {
  onWishlistClick?: () => void;
  onCartClick?: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onWishlistClick,
  onCartClick,
}) => {
  return (
    <div className="flex space-x-4">
      <Button
        label="Wishlist"
        icon={<FiHeart className="w-[14px] h-[14px]" />}
        onClick={onWishlistClick}
      />
      <Button
        label="Your Cart"
        icon={<FiShoppingCart className="w-[14px] h-[14px]" />}
        onClick={onCartClick}
      />
    </div>
  );
};

export default ButtonGroup;