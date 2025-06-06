import Image from "next/image";

import AffleegoLogo from "@/public/images/AffleegoLogo.png";
import { cva } from "class-variance-authority";

const logoVariants = cva("", {
  variants: {
    variant: {
      default: "size-10",
      sm: "size-8",
      lg: "size-12",
      xl: "size-16",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
const Logo = ({
  variant,
  className,
}: {
  variant: "default" | "sm" | "lg" | "xl";
  className?: string;
}) => {
  return (
    <div className={logoVariants({ variant, className })}>
      <Image alt="Affleego Logo" src={AffleegoLogo} />
    </div>
  );
};

export default Logo;
