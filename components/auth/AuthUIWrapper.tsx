import React from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/images/AffleegoLogo.png";

type Props = {
  children: React.ReactNode;
  mode:
    | "signup"
    | "forgot_password"
    | "update_password"
    | "email_signin"
    | "onboarding";
};

function AuthUIWrapper({ children, mode }: Props) {
  const renderTitle = () => {
    switch (mode) {
      case "signup":
        return "Sign Up";
      case "forgot_password":
        return "Forgot Password";
      case "update_password":
        return "Update Password";
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
        return "Don't have an account?";
      case "forgot_password":
        return "Already have an account?";
      case "update_password":
        return "Don't have an account?";
      case "email_signin":
        return "Don't have an account?";
      case "onboarding":
        return "One more thing, just tell us a little bit about your self";
      default:
        return "Don't have an account?";
    }
  };

  return (
    <div className="my-auto rounded-3xl bg-[#11111A] px-8 py-6">
      <div className="mb-3 flex flex-col items-start justify-start space-y-1">
        <Image alt="Affleego Logo" height={60} src={Logo} width={60} />
        <p className="text-[32px] font-medium text-white">{renderTitle()}</p>
        <span className="inline-flex items-center gap-2 text-sm text-white">
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
