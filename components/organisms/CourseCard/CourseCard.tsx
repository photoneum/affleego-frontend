import React from "react";

import { Button } from "@/components/ui/button";

import CardImage from "./CardImage";
import CategoryBadge from "./CategoryBadge";
import PriceTag from "./PriceTag";
import { CourseCardProps } from "./types";

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  image,
  category,
  originalPrice,
  currentPrice,
}) => {
  return (
    <div className="group w-full overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl md:w-[30rem]">
      <div className="relative">
        <CardImage src={image} alt={title} />
        <div className="absolute bottom-4 left-4 z-10">
          <CategoryBadge category={category} />
        </div>
        <div className="absolute bottom-4 right-4 z-10">
          <PriceTag originalPrice={originalPrice} currentPrice={currentPrice} />
        </div>
      </div>

      <div className="p-4 md:p-6">
        <h2 className="mb-4 text-xl font-bold leading-tight transition-colors group-hover:text-yellow-300 md:text-2xl lg:text-3xl">
          {title}
        </h2>
        <Button variant="cta" className="w-full hover:bg-yellow-500">
          Enroll Now
        </Button>
        <span className="text-sm text-gray-400">
          Click to unlock your spot instantly.
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
