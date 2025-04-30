import Image from "next/image";

import AffleegoLogo from "@/public/img/png/AffleegoLogo.png";
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
const Logo = ({ variant }: { variant: "default" | "sm" | "lg" | "xl" }) => {
  return (
    <div className={logoVariants({ variant })}>
      <Image alt="Affleego Logo" src={AffleegoLogo} />
    </div>
  );
};

export default Logo;
