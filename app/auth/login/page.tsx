import React from "react";
import { Suspense } from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import PasswordSignIn from "@/components/auth/PasswordSignIn";

function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthUIWrapper mode="email_signin">
        <PasswordSignIn />
      </AuthUIWrapper>
    </Suspense>
  );
}

export default LoginPage;
