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
import { toast } from "sonner";

import useResendVerificationEmail from "@/hooks/mutations/useResendVerificationEmail";
import useVerifyEmail from "@/hooks/mutations/useVerifyEmail";

import { SIGN_IN_PAGE_ROUTE } from "@/lib/constants";

import { Button } from "../ui/button";

function VerifyUserEmail() {
  const router = useRouter();
  const hasInitiatedVerification = useRef(false);
  const searchParams = useSearchParams();
  const verifyEmailMutation = useVerifyEmail();
  const resendVerificationEmailMutation = useResendVerificationEmail();

  // Get the email and code from URL parameters
  const email = searchParams.get("email");
  const code = searchParams.get("code");

  const onboardingRoute = "/auth/onboarding";
  const query = new URLSearchParams({
    email: email as string,
  });
  const destination = `${onboardingRoute}?${query.toString()}`;

  useEffect(() => {
    if (email && code && !hasInitiatedVerification.current) {
      hasInitiatedVerification.current = true;
      verifyEmailMutation.mutate({ email, code });
    }
  }, [email, code, verifyEmailMutation]);

  useEffect(() => {
    if (verifyEmailMutation.isSuccess) {
      setTimeout(() => {
        router.push(destination);
      }, 2000);
    }
  }, [verifyEmailMutation.isSuccess, router, destination]);

  const handleResendVerificationEmail = () => {
    if (email) {
      resendVerificationEmailMutation.mutate({ email });
    } else {
      toast.error("Email not found. Redirecting to sign in page");
      setTimeout(() => {
        router.push(SIGN_IN_PAGE_ROUTE);
      }, 2000);
    }
  };

  if (verifyEmailMutation.isPending) {
    return (
      <div className="flex w-full flex-col items-start justify-center space-y-4 text-white">
        <Loader2 size={35} className="animate-spin" />
        <p>Please wait while we verify your account</p>
      </div>
    );
  }

  if (verifyEmailMutation.isSuccess) {
    return (
      <div className="flex w-full flex-col items-start justify-center space-y-4 text-white">
        <CheckCircle size={35} />
        <p>Your account has been verified. Redirecting you to the login page</p>
        <Link
          className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
          href={destination}
        >
          <span className="inline-flex items-center justify-center text-[1rem]">
            Go to onboarding
          </span>
          <FaCircleArrowRight className="ml-1" size={30} />
        </Link>
      </div>
    );
  }

  if (verifyEmailMutation.isError) {
    return (
      <div className="flex w-full flex-col items-start justify-center space-y-4 text-white">
        <TriangleAlert className="text-red-500" size={35} />
        <p>Account verification failed. Please try again.</p>
        <p>
          Reason:{" "}
          <span className="text-yellow-500">
            {verifyEmailMutation.error?.message}
          </span>
        </p>
        <Button
          isLoading={resendVerificationEmailMutation.isPending}
          className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
          onClick={handleResendVerificationEmail}
        >
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
      <Button
        isLoading={resendVerificationEmailMutation.isPending}
        className="mt-2 flex h-[unset] w-full items-center justify-center rounded-full bg-yellow-400 p-4 text-[1rem] font-medium text-zinc-950 [&_svg]:size-4 md:[&_svg]:size-5"
        onClick={handleResendVerificationEmail}
      >
        <span className="inline-flex items-center justify-center text-[1rem]">
          Resend verification email
        </span>
        <SendHorizontal className="ml-1" size={30} />
      </Button>
    </div>
  );
}

export default VerifyUserEmail;
