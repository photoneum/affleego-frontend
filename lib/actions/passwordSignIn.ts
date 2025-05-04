"use server";

import { signIn } from "@/auth";

export async function passwordSignIn(email: string, password: string) {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return undefined;
  } catch (error) {
    // console.log("🚀 ~ passwordSignIn ~ error:", error);
    throw error;
  }
}
