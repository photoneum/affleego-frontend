import * as React from "react";

import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

type InputPasswordProps = Omit<React.ComponentProps<"input">, "type"> & {
  icon?: React.ReactNode | string;
  className?: string;
};

export const InputPassword = React.forwardRef<
  HTMLInputElement,
  InputPasswordProps
>(({ className, icon, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      {icon && (
        <span
          className={cn(
            "absolute left-1 top-1/2 ml-2 -translate-y-1/2 transform text-xs font-bold text-gray-400",
          )}
        >
          {icon}
        </span>
      )}
      <input
        className={cn(
          "hide-password-toggle flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-base text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          icon && "pl-10",
          className,
        )}
        ref={ref}
        type={showPassword ? "text" : "password"}
        {...props}
      />
      <button
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700",
        )}
        onClick={togglePasswordVisibility}
        type="button"
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
      {/* hides browsers password toggles */}
      <style>{`
            .hide-password-toggle::-ms-reveal,
            .hide-password-toggle::-ms-clear {
              visibility: hidden;
              pointer-events: none;
              display: none;
            }
          `}</style>
    </div>
  );
});
InputPassword.displayName = "InputPassword";
