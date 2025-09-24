import { useQuery } from "@tanstack/react-query";

import { GET_DEALS_TOP_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { DealStats } from "@/types/generated";

interface GetTopDealsResponse {
  data: DealStats[];
}

const getTopDeals = async () => {
  try {
    const response = await http.get<GetTopDealsResponse>(GET_DEALS_TOP_ROUTE);
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};

export default function useGetTopDeals() {
  const query = useQuery<GetTopDealsResponse, Error>({
    queryKey: ["deals-top"],
    queryFn: getTopDeals,
  });

  return {
    data: query.data?.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}
