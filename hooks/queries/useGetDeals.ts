import { useQuery } from "@tanstack/react-query";

import { DEALS_QUERY_KEY } from "@/lib/constants/query-keys";

import { getDeals } from "@/services/getDeals";

import { DealDetailResponse } from "@/types/generated";

type GetDealsResponse = {
  data: DealDetailResponse[];
};

function useGetDeals() {
  const query = useQuery<GetDealsResponse, Error>({
    queryKey: [DEALS_QUERY_KEY],
    queryFn: () => getDeals(),
  });

  return query;
}

export default useGetDeals;
