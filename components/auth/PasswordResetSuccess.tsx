import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

import SecureLock from "@/public/images/SecureLock.png";

import { SIGN_IN_PAGE_ROUTE } from "@/lib/constants";

function PasswordResetSuccess() {
  return (
    <div className="flex flex-col items-start justify-center space-y-4">
      <div className="mx-auto my-6 flex flex-col items-center justify-center">
        <Image alt="Secure Lock" height={150} src={SecureLock} width={150} />
      </div>
      <h2 className="text-3xl font-medium text-white">
        Password Reset Success!
      </h2>
      <p className="text-white">
        Your password has been reset successfully. Please login to continue.
      </p>
      <Link
        href={SIGN_IN_PAGE_ROUTE}
        className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
      >
        <span className="inline-flex items-center justify-center text-[1rem]">
          Login
        </span>
        <FaCircleArrowRight className="ml-1" size={30} />
      </Link>
    </div>
  );
}

export default PasswordResetSuccess;
