import React from "react";
import { FaChevronLeft } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/images/AffleegoLogo.png";
import AuthBgImage from "@/public/images/AuthBg.png";

type Props = {
  children: React.ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-full bg-zinc-950">
      {/* Background Image - visible on all screens with lower opacity on mobile */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Authentication Background"
          className="block object-cover opacity-20 lg:hidden"
          fill
          priority
          src={AuthBgImage}
        />
      </div>
      {/* Back navigation - show on all screen sizes */}
      <div className="container relative z-10 mx-auto px-5 pt-10 lg:px-6">
        <Link className="w-fit text-white" href="https://affleego.com">
          <div className="flex w-fit items-center justify-center">
            <FaChevronLeft className="mr-3 h-[13px] w-[8px] text-white" />
            <p className="ml-0 text-sm text-white">Back to website</p>
          </div>
        </Link>
      </div>

      {/* Main grid layout */}
      <div className="grid min-h-[calc(100vh-80px)] w-full grid-cols-1 lg:grid-cols-2">
        {/* Image background section (now on the left) - hidden on mobile */}
        <div className="hidden lg:block">
          <div className="relative size-full">
            <Image
              alt="Authentication Background"
              className="object-cover"
              fill
              priority
              src={AuthBgImage}
            />
            <div className="relative z-10 flex h-full flex-col justify-end space-y-4 p-8">
              <Image alt="Affleego Logo" height={100} src={Logo} width={100} />
              <h3 className="bg-gradient-to-tr from-white to-yellow-400/25 bg-clip-text text-5xl text-white lg:text-7xl">
                Ultimate Platform for High-Paying CPA
              </h3>
              <p className="text-xl text-gray-400">
                At Affleego, we don&apos;t just list deals—we secure better
                terms, rank the top-performing brokers, casinos, and
                sportsbooks, and ensure affiliates get paid on time
              </p>
            </div>
          </div>
        </div>

        {/* Children content (now on the right) - centered on mobile */}
        <div className="flex items-center justify-center p-3 md:p-10 lg:py-0">
          <div className="z-10 w-full max-w-lg">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
