import { useQuery } from "@tanstack/react-query";

import { GET_USER_PROFILE_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import type { components } from "@/types/generated/openapi-schema";

export type UserProfile = components["schemas"]["UserProfile"];

interface GetUserProfileResponse {
  data: UserProfile;
}

const getUserProfile = async () => {
  try {
    const response = await http.get<GetUserProfileResponse>(
      GET_USER_PROFILE_ROUTE,
    );
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};

export function useUserProfileData() {
  return useQuery<GetUserProfileResponse, Error>({
    queryKey: ["user-profile"],
    queryFn: getUserProfile,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}
