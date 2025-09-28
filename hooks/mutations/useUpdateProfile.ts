import { useSession } from "next-auth/react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { updateProfile } from "@/services/updateProfile";

import type { components } from "@/types/generated/openapi-schema";

type UserProfile = components["schemas"]["UserProfile"];

interface UpdateProfileResponse {
  data: UserProfile;
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const { update } = useSession();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: async (response: UpdateProfileResponse) => {
      toast.success("Profile updated successfully");
      // Update the session user data
      await update({
        user: {
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          image_url: response.data.image_url,
          email: response.data.email,
          phone_number: response.data.phone_number,
        },
      });

      // Update the user profile query cache with the nested data
      queryClient.setQueryData(["user-profile"], response);

      // Invalidate and refetch user profile data
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    },
    onError: (error) => {
      const errorMessage =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error as any)?.response?.data?.message ||
        error?.message ||
        "Failed to update profile";
      toast.error(errorMessage);
    },
  });
}
