import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { http } from "@/lib/http";

import type { components } from "@/types/generated/openapi-schema";

export type CommunityStats = components["schemas"]["CommunityStats"];

export function useDashboardOverview() {
  return useQuery<CommunityStats, Error>({
    queryKey: ["dashboard-overview"],
    queryFn: async () => {
      const response =
        await http.get<AxiosResponse<CommunityStats>>("dashboard/overview");
      return response.data.data;
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}
