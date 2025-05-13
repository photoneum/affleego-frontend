import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { sendTgNotification } from "@/services/sendTgNotification";

import { StandardApiResponse } from "@/types/generated";

function useSendTgNotification() {
  const mutation = useMutation<StandardApiResponse, Error, void>({
    mutationFn: () => sendTgNotification(),
    onSuccess: () => {
      toast.success("Affleego support notified");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return mutation;
}

export default useSendTgNotification;
