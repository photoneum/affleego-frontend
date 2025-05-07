import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { initatePasswordReset } from "@/services/initatePasswordReset";

import {
  PasswordResetRequestRequest,
  StandardApiResponse,
} from "@/types/generated";

function useInitiatePasswordReset() {
  const mutation = useMutation<
    StandardApiResponse,
    Error,
    PasswordResetRequestRequest
  >({
    mutationFn: (payload: PasswordResetRequestRequest) =>
      initatePasswordReset(payload),
    onSuccess: () => {
      toast.success("Password reset initiated");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return mutation;
}

export default useInitiatePasswordReset;
