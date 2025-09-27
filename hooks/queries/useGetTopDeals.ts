import { useQuery } from "@tanstack/react-query";

import { GET_DEALS_TOP_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { DealStatsPaginatedResponse } from "@/types/generated";

interface GetTopDealsResponse {
  data: DealStatsPaginatedResponse;
}

interface UseGetTopDealsConfig {
  page?: number;
  page_size?: number;
}

const getTopDeals = async (config?: UseGetTopDealsConfig) => {
  try {
    const response = await http.get<GetTopDealsResponse>(GET_DEALS_TOP_ROUTE, {
      params: {
        page: config?.page,
        page_size: config?.page_size,
      },
    });
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};

export default function useGetTopDeals(config?: UseGetTopDealsConfig) {
  const queryKey = ["deals-top"];
  if (config?.page) {
    queryKey.push(String(config.page));
  }
  if (config?.page_size) {
    queryKey.push(String(config.page_size));
  }
  const query = useQuery<GetTopDealsResponse, Error>({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey,
    queryFn: () => getTopDeals(config),
  });

  return {
    data: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}
