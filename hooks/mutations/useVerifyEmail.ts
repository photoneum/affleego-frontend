import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { verifyEmail } from "@/services/verifyEmail";

import { StandardApiResponse, VerificationRequest } from "@/types/generated";

function useVerifyEmail() {
  const mutation = useMutation<StandardApiResponse, Error, VerificationRequest>(
    {
      mutationFn: (payload: VerificationRequest) => verifyEmail(payload),
      onSuccess: (data) => {
        if (data.state === "success") {
          toast.success(data.message);
        }
      },
      onError: (error) => {
        toast.error(error.message);
      },
    },
  );

  return mutation;
}

export default useVerifyEmail;
