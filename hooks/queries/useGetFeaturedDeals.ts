import { useQuery } from "@tanstack/react-query";

import { GET_DEALS_FEATURED_ROUTE } from "@/lib/constants/api-endpoints";
import { http } from "@/lib/http";

import { DealPaginatedResponse } from "@/types/generated";

interface GetFeaturedDealsResponse {
  data: DealPaginatedResponse;
}

interface UseGetFeaturedDealsConfig {
  order: "asc" | "desc";
  page?: number;
  page_size?: number;
}

function getFeaturedDeals(config?: UseGetFeaturedDealsConfig) {
  return http
    .get<GetFeaturedDealsResponse>(GET_DEALS_FEATURED_ROUTE, { params: config })
    .then((res) => res.data);
}

export default function useGetFeaturedDeals(
  config?: UseGetFeaturedDealsConfig,
) {
  const queryKey = ["deals-featured"];
  if (config?.order) {
    queryKey.push(config.order);
  }
  if (config?.page) {
    queryKey.push(String(config.page));
  }
  if (config?.page_size) {
    queryKey.push(String(config.page_size));
  }

  const query = useQuery<GetFeaturedDealsResponse, Error>({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey,
    queryFn: () => getFeaturedDeals(config),
  });

  return {
    data: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}
