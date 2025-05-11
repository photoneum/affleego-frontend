import React, { Suspense } from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import PasswordReset from "@/components/auth/PasswordReset";

async function PasswordResetWithTokenPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthUIWrapper mode="reset_password">
        <PasswordReset />
      </AuthUIWrapper>
    </Suspense>
  );
}

export default PasswordResetWithTokenPage;
