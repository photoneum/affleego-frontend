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
  ftdsDeliverabilityPerMonth: z.coerce
    .number()
    .min(0, { message: "Please enter a valid number" }),
  affliateExperience: z.string().min(1, { message: "Please select an option" }),
  typeOfDealsWanted: z.string().min(1, { message: "Please select an option" }),
  feedbackMessage: z.string().max(500).optional(),
});
