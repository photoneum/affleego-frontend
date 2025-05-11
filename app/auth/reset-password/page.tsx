import React from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import PasswordReset from "@/components/auth/PasswordReset";

async function PasswordResetWithTokenPage() {
  return (
    <AuthUIWrapper mode="reset_password">
      <PasswordReset />
    </AuthUIWrapper>
  );
}

export default PasswordResetWithTokenPage;
