"use client";

import { useTheme } from "next-themes";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-yellow-400 group-[.toaster]:text-black group-[.toaster]:border-yellow-400 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-black",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-black",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-black",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
