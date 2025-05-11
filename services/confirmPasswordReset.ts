import { CONFIRM_PASSWORD_RESET_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { PasswordResetConfirmRequest } from "@/types/generated";

export const confirmPasswordReset = async (
  payload: PasswordResetConfirmRequest,
) => {
  try {
    const response = await http.post(CONFIRM_PASSWORD_RESET_ROUTE, payload);
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};
