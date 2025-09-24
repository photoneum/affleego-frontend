import { useQuery } from "@tanstack/react-query";

import { GET_DEALS_FEATURED_ROUTE } from "@/lib/constants/api-endpoints";
import { http } from "@/lib/http";

import { DealDetailResponse } from "@/types/generated";

interface GetFeaturedDealsResponse {
  data: DealDetailResponse[];
}

function getFeaturedDeals() {
  return http
    .get<GetFeaturedDealsResponse>(GET_DEALS_FEATURED_ROUTE)
    .then((res) => res.data);
}

export default function useGetFeaturedDeals() {
  const query = useQuery<GetFeaturedDealsResponse, Error>({
    queryKey: ["deals-featured"],
    queryFn: getFeaturedDeals,
  });

  return {
    data: query.data?.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}
