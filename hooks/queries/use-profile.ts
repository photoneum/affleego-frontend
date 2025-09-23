import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { http } from "@/lib/http";

import type { components } from "@/types/generated/openapi-schema";

export type UserProfile = components["schemas"]["UserProfile"];

export function useProfile() {
  return useQuery<UserProfile, Error>({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const response =
        await http.get<AxiosResponse<UserProfile>>("auth/profile");
      return response.data.data;
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}
