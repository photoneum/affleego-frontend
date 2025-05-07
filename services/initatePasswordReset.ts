import { INITIATE_PASSWORD_RESET_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { PasswordResetRequestRequest } from "@/types/generated";

export const initatePasswordReset = async (
  payload: PasswordResetRequestRequest,
) => {
  try {
    const response = await http.post(INITIATE_PASSWORD_RESET_ROUTE, payload);
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};
