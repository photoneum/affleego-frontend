import { useQuery } from "@tanstack/react-query";

import { GET_DEALS_FEATURED_ROUTE } from "@/lib/constants/api-endpoints";
import { http } from "@/lib/http";

import { DealPaginatedResponse } from "@/types/generated";

interface GetFeaturedDealsResponse {
  data: DealPaginatedResponse;
}

function getFeaturedDeals(config?: UseGetFeaturedDealsConfig) {
  return http
    .get<GetFeaturedDealsResponse>(GET_DEALS_FEATURED_ROUTE, { params: config })
    .then((res) => res.data);
}

type UseGetFeaturedDealsConfig = {
  order: "asc" | "desc";
  page?: number;
  page_size?: number;
};

export default function useGetFeaturedDeals(
  config?: UseGetFeaturedDealsConfig,
) {
  const query = useQuery<GetFeaturedDealsResponse, Error>({
    queryKey: ["deals-featured", config],
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
