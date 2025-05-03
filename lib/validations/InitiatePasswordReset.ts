import { z } from "zod";

export const InitiatePasswordResetSchema = z.object({
  email: z.string().email(),
});
