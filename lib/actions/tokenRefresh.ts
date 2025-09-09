import { env } from "@/env";
import axios from "axios";

import { TOKEN_REFRESH_ROUTE } from "../constants";

export async function tokenRefresh(refreshToken: string) {
  try {
    const response = await axios.post(
      `${env.NEXT_PUBLIC_API_BASE_URL}${TOKEN_REFRESH_ROUTE}`,
      { refresh: refreshToken },
      { headers: { "Content-Type": "application/json" } },
    );
    return response.data; // { access: "...", refresh: "..." }
  } catch (error) {
    // Determine error type if possible
    const errorMessage =
      error instanceof Error ? error.message : "Token refresh failed";
    return {
      message: errorMessage,
      code: "token_refresh_failed",
    };
  }
}
