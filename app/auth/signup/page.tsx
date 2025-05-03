import React from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import UserSignUp from "@/components/auth/UserSignUp";

function RegisterPage() {
  return (
    <AuthUIWrapper mode="signup">
      <UserSignUp />
    </AuthUIWrapper>
  );
}

export default RegisterPage;
