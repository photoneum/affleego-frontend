"use server";

import { signOut } from "@/auth";

export async function logout() {
  try {
    await signOut({
      redirectTo: "/",
    });

    return undefined;
  } catch (error) {
    throw error;
  }
}
