import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { collectUserOnboardingData } from "@/services/collectUserOnboardingData";

import { StandardApiResponse, UserOnboardingRequest } from "@/types/generated";

function useCollectUserOnboardingData() {
  const mutation = useMutation<
    StandardApiResponse,
    Error,
    UserOnboardingRequest
  >({
    mutationFn: (payload: UserOnboardingRequest) =>
      collectUserOnboardingData(payload),
    onSuccess: (data) => {
      if (data.state === "success") {
        toast.success(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return mutation;
}

export default useCollectUserOnboardingData;
