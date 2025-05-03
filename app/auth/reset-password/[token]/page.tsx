import React from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import PasswordReset from "@/components/auth/PasswordReset";

type Props = {
  params: Promise<{ token: string }>;
};

async function PasswordResetWithTokenPage({ params }: Props) {
  const { token } = await params;
  return (
    <AuthUIWrapper mode="reset_password">
      <PasswordReset token={token} />
    </AuthUIWrapper>
  );
}

export default PasswordResetWithTokenPage;
