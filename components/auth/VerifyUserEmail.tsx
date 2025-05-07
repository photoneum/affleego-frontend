"use client";

import React, { useEffect, useRef } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import {
  CheckCircle,
  Loader2,
  OctagonAlert,
  SendHorizontal,
  TriangleAlert,
} from "lucide-react";

import useVerifyEmail from "@/hooks/mutations/useVerifyEmail";

import { SIGN_IN_PAGE_ROUTE } from "@/lib/constants";

import { Button } from "../ui/button";

function VerifyUserEmail() {
  const router = useRouter();
  const hasInitiatedVerification = useRef(false);
  const searchParams = useSearchParams();
  const mutation = useVerifyEmail();

  // Get the email and code from URL parameters
  const email = searchParams.get("email");
  const code = searchParams.get("code");

  useEffect(() => {
    if (email && code && !hasInitiatedVerification.current) {
      hasInitiatedVerification.current = true;
      mutation.mutate({ email, code });
    }
  }, [email, code, mutation]);

  useEffect(() => {
    if (mutation.isSuccess) {
      setTimeout(() => {
        router.push(SIGN_IN_PAGE_ROUTE);
      }, 2000);
    }
  }, [mutation.isSuccess, router]);

  if (mutation.isPending) {
    return (
      <div className="flex w-full flex-col items-start justify-center space-y-4 text-white">
        <Loader2 size={35} className="animate-spin" />
        <p>Please wait while we verify your account</p>
      </div>
    );
  }

  if (mutation.isSuccess) {
    return (
      <div className="flex w-full flex-col items-start justify-center space-y-4 text-white">
        <CheckCircle size={35} />
        <p>Your account has been verified. Redirecting you to the login page</p>
        <Link
          className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
          href={SIGN_IN_PAGE_ROUTE}
        >
          <span className="inline-flex items-center justify-center text-[1rem]">
            Go to login page
          </span>
          <FaCircleArrowRight className="ml-1" size={30} />
        </Link>
      </div>
    );
  }

  if (mutation.isError) {
    return (
      <div className="flex w-full flex-col items-start justify-center space-y-4 text-white">
        <TriangleAlert className="text-red-500" size={35} />
        <p>Account verification failed. Please try again.</p>
        <p>
          Reason:{" "}
          <span className="text-yellow-500">{mutation.error?.message}</span>
        </p>
        <Button className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5">
          <span className="inline-flex items-center justify-center text-[1rem]">
            Resend verification email
          </span>
          <SendHorizontal className="ml-1" size={30} />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-start justify-center space-y-4 text-white">
      <OctagonAlert className="text-red-500" size={35} />
      <p>Something went wrong. Please try again.</p>
      <Button className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5">
        <span className="inline-flex items-center justify-center text-[1rem]">
          Resend verification email
        </span>
        <SendHorizontal className="ml-1" size={30} />
      </Button>
    </div>
  );
}

export default VerifyUserEmail;
