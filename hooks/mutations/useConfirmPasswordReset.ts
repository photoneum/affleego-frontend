import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { confirmPasswordReset } from "@/services/confirmPasswordReset";

import {
  PasswordResetConfirmRequest,
  StandardApiResponse,
} from "@/types/generated";

function useConfirmPasswordReset() {
  const mutation = useMutation<
    StandardApiResponse,
    Error,
    PasswordResetConfirmRequest
  >({
    mutationFn: (payload: PasswordResetConfirmRequest) =>
      confirmPasswordReset(payload),
    onSuccess: () => {
      toast.success("Password reset successful");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return mutation;
}

export default useConfirmPasswordReset;
