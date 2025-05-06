import React from "react";

import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InfoCardProps {
  title: string;
  value: string;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  change,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border-[#343B4F] bg-[#11111A] p-6 text-white transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/30",
        className,
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-400">
          <span className="text-gray-400">{icon}</span>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <button className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-800/50 hover:text-white">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="mt-auto flex items-end justify-between">
        <div className="flex flex-row space-x-2">
          <span className="text-4xl font-bold tracking-tight">{value}</span>
          {change && (
            <div className="mt-1 flex items-center">
              <span
                className={cn(
                  "rounded px-2 py-0.5 text-sm font-medium",
                  change.isPositive
                    ? "bg-green-400/10 text-green-400"
                    : "bg-red-400/10 text-red-400",
                )}
              >
                {change.isPositive ? "↑" : "↓"}{" "}
                {Math.abs(change.value).toFixed(1)}%
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-gray-800/20 to-transparent transition-transform duration-500 group-hover:scale-110"></div>
    </div>
  );
};

export default InfoCard;
