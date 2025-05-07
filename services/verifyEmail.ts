import { VERIFY_EMAIL_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { VerificationRequest } from "@/types/generated";

export const verifyEmail = async (payload: VerificationRequest) => {
  try {
    const response = await http.post(VERIFY_EMAIL_ROUTE, payload);
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};
