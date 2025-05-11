import type { components } from "./openapi-schema";

export type StandardApiResponse<T = null> = {
  state: "success" | "error";
  message: string;
  data: T;
};

export type UserRegistrationRequest =
  components["schemas"]["UserRegistrationRequest"];
export type UserRegistration = components["schemas"]["UserRegistration"];
export type VerificationRequest = components["schemas"]["VerificationRequest"];
export type ResendVerificationCodeRequest =
  components["schemas"]["ResendVerificationCodeRequest"];
export type PasswordResetRequestRequest =
  components["schemas"]["PasswordResetRequestRequest"];
export type PasswordResetConfirmRequest =
  components["schemas"]["PasswordResetConfirmRequest"];
export type UserOnboardingRequest =
  components["schemas"]["UserOnboardingRequest"];
