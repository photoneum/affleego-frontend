import { useQuery } from "@tanstack/react-query";

import { GET_DEALS_OVERVIEW_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { DealStatsOverview } from "@/types/generated";

interface GetDealsOverviewResponse {
  data: DealStatsOverview;
}

const getDealsOverview = async () => {
  try {
    const response = await http.get<GetDealsOverviewResponse>(
      GET_DEALS_OVERVIEW_ROUTE,
    );
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};

export default function useGetDealsOverview() {
  const query = useQuery<GetDealsOverviewResponse, Error>({
    queryKey: ["deals-overview"],
    queryFn: getDealsOverview,
  });

  return {
    data: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}
