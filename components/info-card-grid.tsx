import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface InfoCardGridProps {
  children: ReactNode;
  className?: string;
}

const InfoCardGrid: React.FC<InfoCardGridProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default InfoCardGrid;
