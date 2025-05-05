"use server";

import { signIn } from "@/auth";

type AuthError = {
  message: string;
  code: "invalid_credentials" | "auth_error" | "server_error";
};

export async function passwordSignIn(
  email: string,
  password: string,
): Promise<AuthError | undefined> {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // Check if signIn returns any error information
    if (result?.error) {
      return {
        message: result.error,
        code: "auth_error",
      };
    }

    return undefined;
  } catch (error) {
    // Determine error type if possible
    const errorMessage =
      error instanceof Error ? error.message : "Authentication failed";
    return {
      message: errorMessage,
      code: "invalid_credentials",
    };
  }
}
