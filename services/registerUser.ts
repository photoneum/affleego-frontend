import { SIGN_UP_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { UserRegistrationRequest } from "@/types/generated";

export const registerUser = async (payload: UserRegistrationRequest) => {
  try {
    const response = await http.post(SIGN_UP_ROUTE, payload);
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};
