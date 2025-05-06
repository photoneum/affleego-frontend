import React from "react";

interface TagBadgeProps {
  label: string;
}

export const TagBadge: React.FC<TagBadgeProps> = ({ label }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-[#2A2A3A] px-3 py-1 text-xs font-medium text-gray-300 transition-all duration-300 hover:bg-[#303045]">
      {label}
    </span>
  );
};
