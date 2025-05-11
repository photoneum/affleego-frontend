import React from "react";

import CardImage from "./CardImage";
import CategoryBadge from "./CategoryBadge";
import CourseStats from "./CourseStats";
import InstructorInfo from "./InstructorInfo";
import PriceTag from "./PriceTag";
import { CourseCardProps } from "./types";

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  image,
  category,
  originalPrice,
  currentPrice,
  instructor,
  rating,
  reviews,
  modules,
  duration,
  lessons,
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

        <InstructorInfo
          name={instructor.name}
          avatar={instructor.avatar}
          rating={rating}
          reviews={reviews}
        />

        <div className="mt-6 border-t border-gray-800 pt-6">
          <CourseStats
            modules={modules}
            duration={duration}
            lessons={lessons}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
