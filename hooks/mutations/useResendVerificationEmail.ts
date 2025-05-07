import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { resendVerificationEmail } from "@/services/resendVerificationEmail";

import {
  ResendVerificationCodeRequest,
  StandardApiResponse,
} from "@/types/generated";

function useResendVerificationEmail() {
  const mutation = useMutation<
    StandardApiResponse,
    Error,
    ResendVerificationCodeRequest
  >({
    mutationFn: (payload: ResendVerificationCodeRequest) =>
      resendVerificationEmail(payload),
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

export default useResendVerificationEmail;
