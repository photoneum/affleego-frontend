import { UPDATE_USER_PROFILE_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

import type { components } from "@/types/generated/openapi-schema";

type UserProfile = components["schemas"]["UserProfile"];

export interface UpdateProfileRequest {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  image?: File;
  country?: string;
}

interface UpdateProfileResponse {
  data: UserProfile;
}

export const updateProfile = async (
  request: UpdateProfileRequest,
): Promise<UpdateProfileResponse> => {
  try {
    const formData = new FormData();

    if (request.first_name !== undefined) {
      formData.append("first_name", request.first_name);
    }
    if (request.last_name !== undefined) {
      formData.append("last_name", request.last_name);
    }
    if (request.phone_number !== undefined) {
      formData.append("phone_number", request.phone_number);
    }
    if (request.country !== undefined) {
      formData.append("country", request.country);
    }
    if (request.image) {
      formData.append("image", request.image);
    }

    const response = await http.put<UpdateProfileResponse>(
      UPDATE_USER_PROFILE_ROUTE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
