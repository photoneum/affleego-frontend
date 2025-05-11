import React from "react";

interface CategoryBadgeProps {
  category: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  return (
    <span className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-900 shadow-md transition-transform duration-300 hover:scale-105">
      {category}
    </span>
  );
};

export default CategoryBadge;
