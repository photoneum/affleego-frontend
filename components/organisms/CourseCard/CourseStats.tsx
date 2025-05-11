import React from "react";

import { BookOpen, Clock, Layers } from "lucide-react";

interface CourseStatsProps {
  modules: number;
  duration: string;
  lessons: number;
}

const CourseStats: React.FC<CourseStatsProps> = ({
  modules,
  duration,
  lessons,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4 text-gray-400 sm:justify-between">
      <div className="flex items-center gap-2">
        <Layers className="size-5" />
        <span className="text-base sm:text-lg">
          {modules.toString().padStart(2, "0")} Modules
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="size-5" />
        <span className="text-base sm:text-lg">{duration}</span>
      </div>
      <div className="flex items-center gap-2">
        <BookOpen className="size-5" />
        <span className="text-base sm:text-lg">{lessons} Lessons</span>
      </div>
    </div>
  );
};

export default CourseStats;
