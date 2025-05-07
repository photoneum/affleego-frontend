import { RESEND_VERIFICATION_CODE_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { ResendVerificationCodeRequest } from "@/types/generated";

export const resendVerificationEmail = async (
  payload: ResendVerificationCodeRequest,
) => {
  try {
    const response = await http.post(RESEND_VERIFICATION_CODE_ROUTE, payload);
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};
