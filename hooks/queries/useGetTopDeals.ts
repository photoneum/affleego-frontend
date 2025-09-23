import { useQuery } from "@tanstack/react-query";

import { GET_DEALS_TOP_ROUTE } from "@/lib/constants/api-endpoints";
import { http } from "@/lib/http";

import { DealStats } from "@/types/generated";

function getTopDeals() {
  return http.get(GET_DEALS_TOP_ROUTE).then((res) => res.data);
}

export default function useGetTopDeals() {
  return useQuery<DealStats[], Error>({
    queryKey: ["deals-top"],
    queryFn: getTopDeals,
  });
}
