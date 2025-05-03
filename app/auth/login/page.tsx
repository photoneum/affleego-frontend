import React from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import PasswordSignIn from "@/components/auth/PasswordSignIn";

function LoginPage() {
  return (
    <AuthUIWrapper mode="email_signin">
      <PasswordSignIn />
    </AuthUIWrapper>
  );
}

export default LoginPage;
