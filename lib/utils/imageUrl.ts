import { env } from "@/env";

export const getImageUrl = (url?: string): string => {
  if (!url || url.trim() === "") {
    // return "/images/default-deal-logo.png"; // Path to your default image
    return "";
  }
  return env.NEXT_PUBLIC_IMAGE_BASE_URL + url;
};
