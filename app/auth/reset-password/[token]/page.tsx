import React from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import PasswordReset from "@/components/auth/PasswordReset";

type Props = {
  params: {
    token: string;
  };
};

function PasswordResetWithTokenPage({ params }: Props) {
  return (
    <AuthUIWrapper mode="reset_password">
      <PasswordReset token={params.token} />
    </AuthUIWrapper>
  );
}

export default PasswordResetWithTokenPage;
