import React from "react";

import { cn } from "@/lib/utils";

interface InfoCardSkeletonProps {
  className?: string;
}

const InfoCardSkeleton: React.FC<InfoCardSkeletonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "group relative flex animate-pulse flex-col overflow-hidden rounded-xl border-[#343B4F] bg-[#11111A] p-4 text-white transition-all duration-300 sm:p-6",
        className,
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-400">
          <span className="size-6 rounded-full bg-gray-700/40" />
          <span className="h-4 w-20 rounded bg-gray-700/40" />
        </div>
        <span className="size-6 rounded-full bg-gray-700/40" />
      </div>

      <div className="mt-auto flex items-end justify-between">
        <div className="flex flex-row space-x-2">
          <span className="h-10 w-24 rounded bg-gray-700/40" />
          <span className="h-6 w-12 rounded bg-gray-700/40" />
        </div>
      </div>

      <div className="absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-gray-800/20 to-transparent transition-transform duration-500 group-hover:scale-110"></div>
    </div>
  );
};

export default InfoCardSkeleton;
