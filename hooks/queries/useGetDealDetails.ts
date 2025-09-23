import { useQuery } from "@tanstack/react-query";

import { http } from "@/lib/http";

import { DealDetailResponse } from "@/types/generated";

export default function useGetDealDetails(dealUuid: string) {
  return useQuery<DealDetailResponse, Error>({
    queryKey: ["deal-detail", dealUuid],
    queryFn: async () => {
      const res = await http.get(`/deals/${dealUuid}`);
      return res.data;
    },
    enabled: !!dealUuid,
  });
}
