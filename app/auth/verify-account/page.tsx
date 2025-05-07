// http://localhost:3000/auth/verify-account/?email=polyf@mailinator.com&code=281813
import React from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import VerifyUserEmail from "@/components/auth/VerifyUserEmail";

function VerifyAccount() {
  return (
    <AuthUIWrapper mode="verify_account">
      <VerifyUserEmail />
    </AuthUIWrapper>
  );
}

export default VerifyAccount;
