// http://localhost:3000/auth/verify-account/?email=polyf@mailinator.com&code=281813
import React, { Suspense } from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import VerifyUserEmail from "@/components/auth/VerifyUserEmail";

function VerifyAccount() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthUIWrapper mode="verify_account">
        <VerifyUserEmail />
      </AuthUIWrapper>
    </Suspense>
  );
}

export default VerifyAccount;
