import { useQuery } from "@tanstack/react-query";

import { GET_PROMOTIONS_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import { Promotions } from "@/types/generated";

interface GetPromotionsResponse {
  data: Promotions[];
}

const getPromotions = async () => {
  try {
    const response =
      await http.get<GetPromotionsResponse>(GET_PROMOTIONS_ROUTE);
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};

export default function useGetPromotions() {
  const query = useQuery<GetPromotionsResponse, Error>({
    queryKey: ["promotions"],
    queryFn: getPromotions,
  });

  return {
    data: query.data?.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}
