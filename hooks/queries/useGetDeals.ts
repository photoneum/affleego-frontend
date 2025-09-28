import { useQuery } from "@tanstack/react-query";

import { GET_DEALS_ROUTE } from "@/lib/constants";
import { DEALS_QUERY_KEY } from "@/lib/constants/query-keys";
import { http } from "@/lib/http";

import { DealPaginatedResponse } from "@/types/generated";

type GetDealsResponse = {
  data: DealPaginatedResponse;
};

type UseGetDealsConfig = {
  order?: "asc" | "desc";
  page?: number;
  page_size?: number;
};

const getDeals = async (config?: UseGetDealsConfig) => {
  try {
    const response = await http.get(GET_DEALS_ROUTE, { params: config });
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};

function useGetDeals(config?: UseGetDealsConfig) {
  const queryKey = [DEALS_QUERY_KEY];
  if (config?.order) {
    queryKey.push(config.order);
  }
  if (config?.page) {
    queryKey.push(String(config.page));
  }
  if (config?.page_size) {
    queryKey.push(String(config.page_size));
  }

  const query = useQuery<GetDealsResponse, Error>({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey,
    queryFn: () => getDeals(config),
  });

  return {
    data: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}

export default useGetDeals;
