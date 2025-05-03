import { z } from "zod";

export const UserOnboardingSchema = z.object({
  brandName: z.string().min(1, { message: "Brand name is required" }),
  website: z
    .string()
    .url({ message: "Please enter a valid website URL" })
    .optional(),
  marketingMethods: z
    .string()
    .min(1, { message: "Please provide at least one marketing method" }),
  heardFrom: z.string().refine(
    (value) => {
      if (!value) return true;
      return [
        "social_media",
        "search_engine",
        "friend_referral",
        "advertisement",
        "other",
      ].includes(value);
    },
    {
      message: "Please select how you heard about us",
    },
  ),
  feedbackMessage: z.string().max(500).optional(),
});
