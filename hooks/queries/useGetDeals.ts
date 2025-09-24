import { useQuery } from "@tanstack/react-query";

import { DEALS_QUERY_KEY } from "@/lib/constants/query-keys";

import { getDeals } from "@/services/getDeals";

import { DealDetailResponse } from "@/types/generated";

type GetDealsResponse = {
  data: DealDetailResponse[];
};

type UseGetDealsConfig = {
  count?: number;
};

function useGetDeals(config: UseGetDealsConfig = {}) {
  const query = useQuery<GetDealsResponse, Error>({
    queryKey: [DEALS_QUERY_KEY, config.count],
    queryFn: () => getDeals(),
  });

  return query;
}

export default useGetDeals;
