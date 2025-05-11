import React from "react";

import { Star } from "lucide-react";

interface InstructorInfoProps {
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
}

const InstructorInfo: React.FC<InstructorInfoProps> = ({
  name,
  avatar,
  rating,
  reviews,
}) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="size-10 rounded-full object-cover ring-2 ring-gray-700 transition-all group-hover:ring-yellow-500 sm:size-12"
        />
        <span className="text-lg text-gray-300 sm:text-xl">{name}</span>
      </div>
      <div className="flex items-center gap-2">
        <Star className="size-5 fill-yellow-400 text-yellow-400" />
        <span className="text-gray-300">
          {rating} <span className="text-gray-500">({reviews} Reviews)</span>
        </span>
      </div>
    </div>
  );
};

export default InstructorInfo;
