import React from "react";

import { env } from "@/env";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import PasswordSignIn from "@/components/auth/PasswordSignIn";

function LoginPage() {
  return (
    <AuthUIWrapper mode="email_signin">
      <span className="text-red-500">{env.NEXT_PUBLIC_API_BASE_URL}</span>
      <PasswordSignIn />
    </AuthUIWrapper>
  );
}

export default LoginPage;
