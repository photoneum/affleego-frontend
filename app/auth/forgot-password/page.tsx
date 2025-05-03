import React from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import InitiatePasswordReset from "@/components/auth/InitiatePasswordReset";

function ForgotPasswordPage() {
  return (
    <AuthUIWrapper mode="forgot_password">
      <InitiatePasswordReset />
    </AuthUIWrapper>
  );
}

export default ForgotPasswordPage;
