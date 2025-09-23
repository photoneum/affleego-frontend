import { useQuery } from "@tanstack/react-query";

import { GET_DEALS_FEATURED_ROUTE } from "@/lib/constants/api-endpoints";
import { http } from "@/lib/http";

import { DealDetailResponse } from "@/types/generated";

function getFeaturedDeals() {
  return http.get(GET_DEALS_FEATURED_ROUTE).then((res) => res.data);
}

export default function useGetFeaturedDeals() {
  return useQuery<DealDetailResponse[], Error>({
    queryKey: ["deals-featured"],
    queryFn: getFeaturedDeals,
  });
}
