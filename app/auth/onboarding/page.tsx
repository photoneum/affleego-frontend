import React, { Suspense } from "react";

import AuthUIWrapper from "@/components/auth/AuthUIWrapper";
import UserOnboarding from "@/components/auth/UserOnboarding";

function OnboardingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthUIWrapper mode="onboarding">
        <UserOnboarding />
      </AuthUIWrapper>
    </Suspense>
  );
}

export default OnboardingPage;
