import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { registerUser } from "@/services/registerUser";

import { UserRegistration, UserRegistrationRequest } from "@/types/generated";

type RegisterUserResponse = {
  state: "success" | "error";
  message: string;
  data: UserRegistration;
};

function useRegisterUser() {
  const mutation = useMutation<
    RegisterUserResponse,
    Error,
    UserRegistrationRequest
  >({
    mutationFn: (payload: UserRegistrationRequest) => registerUser(payload),
    onSuccess: () => {
      toast.success("Registration successful");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return mutation;
}

export default useRegisterUser;
