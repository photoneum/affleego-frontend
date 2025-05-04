import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";

import { passwordSignIn } from "@/lib/actions/passwordSignIn";
import { PasswordSignInSchema } from "@/lib/validations/PasswordSignIn";

type PasswordSignInFormFields = z.infer<typeof PasswordSignInSchema>;

function usePasswordSignIn() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const mutation = useMutation<void, Error, PasswordSignInFormFields>({
    mutationFn: (payload: PasswordSignInFormFields) => {
      return passwordSignIn(payload.email, payload.password);
    },
    onSuccess: () => {
      toast.success("Signed in successfully");
      if (callbackUrl) {
        router.push(callbackUrl);
      } else {
        router.push("/dashboard");
      }
    },
    onError: (error) => {
      const errorMessage =
        error.message || "Failed to sign in. Please try again.";
      toast.error(errorMessage);
    },
  });

  return mutation;
}

export default usePasswordSignIn;
