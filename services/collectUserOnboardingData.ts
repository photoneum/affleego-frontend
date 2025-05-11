import { COLLECT_USER_ONBOARDING_DATA_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { UserOnboardingRequest } from "@/types/generated";

export const collectUserOnboardingData = async (
  payload: UserOnboardingRequest,
) => {
  try {
    const response = await http.post(
      COLLECT_USER_ONBOARDING_DATA_ROUTE,
      payload,
    );
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};
