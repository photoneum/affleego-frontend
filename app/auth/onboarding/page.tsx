import React from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import UserOnboarding from "@/components/auth/UserOnboarding";

function OnboardingPage() {
  return (
    <AuthUIWrapper mode="onboarding">
      <UserOnboarding />
    </AuthUIWrapper>
  );
}

export default OnboardingPage;
