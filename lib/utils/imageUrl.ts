import { env } from "@/env";

export const getImageUrl = (url?: string): string => {
  if (!url || url.trim() === "") {
    // return "/images/default-deal-logo.png"; // Path to your default image
    return "";
  }
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  // Ensure there's a trailing slash in the base URL if needed
  if (!env.NEXT_PUBLIC_IMAGE_BASE_URL.endsWith("/")) {
    return env.NEXT_PUBLIC_IMAGE_BASE_URL + "/" + url;
  }
  return env.NEXT_PUBLIC_IMAGE_BASE_URL + url;
};
