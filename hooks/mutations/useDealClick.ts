import { useMutation } from "@tanstack/react-query";

import { http } from "@/lib/http";

export default function useDealClick() {
  return useMutation({
    mutationFn: async (dealUuid: string) => {
      await http.post(`/deal-stats/${dealUuid}/click`);
    },
  });
}
