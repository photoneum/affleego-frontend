import React from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/images/AffleegoLogo.png";

type Props = {
  children: React.ReactNode;
  mode:
    | "signup"
    | "forgot_password"
    | "reset_password"
    | "email_signin"
    | "onboarding";
};

function AuthUIWrapper({ children, mode }: Props) {
  const renderTitle = () => {
    switch (mode) {
      case "signup":
        return "Let's get you started";
      case "forgot_password":
        return "Forgot your password?";
      case "reset_password":
        return "Modify your password";
      case "email_signin":
        return "Sign In";
      case "onboarding":
        return "More about yourself...";
      default:
        return "Sign In";
    }
  };

  const renderSubtitle = () => {
    switch (mode) {
      case "signup":
        return "Already have an account?";
      case "forgot_password":
        return "Enter your email address and we will send a Reset Link";
      case "reset_password":
        return "Update your password";
      case "email_signin":
        return "Don't have an account?";
      case "onboarding":
        return "One more thing, just tell us a little bit about yourself";
      default:
        return "Don't have an account?";
    }
  };

  return (
    <div className="my-auto rounded-3xl bg-[#11111A] px-3 py-2 md:px-8 md:py-6">
      <div className="mb-5 flex flex-col items-start justify-start space-y-1 md:mb-10">
        <Image alt="Affleego Logo" height={60} src={Logo} width={60} />
        <p className="text-[28px] font-medium text-white md:text-[36px]">
          {renderTitle()}
        </p>
        <span className="inline-flex flex-row flex-wrap items-center gap-2 text-sm text-white">
          {renderSubtitle()}
          <Link
            className="text-yellow-400"
            href={mode === "email_signin" ? "/auth/signup" : "/auth/login"}
          >
            {mode === "email_signin" ? "Create an account" : "Sign In"}
          </Link>
        </span>
      </div>
      {children}
    </div>
  );
}

export default AuthUIWrapper;
