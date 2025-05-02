import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  icon?: React.ReactNode | string;
  iconPosition?: "left" | "right";
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      icon,
      iconPosition,
      leftAdornment,
      rightAdornment,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative w-full">
        {/* Icon container */}
        {icon && (
          <span
            className={cn(
              "absolute top-1/2 ml-2 -translate-y-1/2 transform text-xs font-bold text-gray-400",
              iconPosition === "left" ? "left-1" : "right-5 pr-2",
            )}
          >
            {icon}
          </span>
        )}
        {/* Left adornment container */}
        {leftAdornment && (
          <span
            className="absolute left-4 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center"
            style={{ pointerEvents: "none" }}
          >
            <span className="text-gray-400">{leftAdornment}</span>
          </span>
        )}

        {/* Right adornment container */}
        {rightAdornment && (
          <span
            className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center"
            style={{ pointerEvents: "none" }}
          >
            <span className="text-gray-400">{rightAdornment}</span>
          </span>
        )}

        {/* Input element */}
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            icon && iconPosition === "left" && "pl-10",
            icon && iconPosition === "right" && "pr-12",
            leftAdornment && "pl-10",
            rightAdornment && "pr-10",
            className,
          )}
          ref={ref}
          type={type}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
