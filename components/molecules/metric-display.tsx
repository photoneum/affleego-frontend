import React, { ReactNode } from "react";

interface MetricDisplayProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export const MetricDisplay: React.FC<MetricDisplayProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="shrink-0 rounded-full bg-[#2A2A3A] p-2 text-gray-400">
        {icon}
      </div>
      <div>
        <p className="mb-1 text-xs text-gray-400">{label}</p>
        <p className="text-base font-medium">{value}</p>
      </div>
    </div>
  );
};
