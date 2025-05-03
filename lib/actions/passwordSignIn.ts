"use server";

import { signIn } from "@/auth";

export async function passwordSignIn(email: string, password: string) {
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log("🚀 ~ passwordSignIn ~ response:", response);

    return response;
  } catch (error) {
    throw error;
  }
}
