import React from "react";

interface PriceTagProps {
  originalPrice: number;
  currentPrice: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ originalPrice, currentPrice }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-base text-gray-400 line-through">
        ${originalPrice.toFixed(2)}
      </span>
      <span className="text-2xl font-bold text-yellow-300">
        ${currentPrice.toFixed(2)}
      </span>
    </div>
  );
};

export default PriceTag;
