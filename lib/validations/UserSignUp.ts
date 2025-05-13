import { z } from "zod";

export const UserSignUpSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name is required" })
    .refine(
      (data) =>
        data
          .split(" ")
          .map((name) => name.trim())
          .filter((name) => name.length > 0).length >= 2,
      { message: "Full name must contain at least two words" },
    ),
  phoneNumber: z.string().min(3, { message: "Phone number is required" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character",
    }),
  termsAndConditions: z.boolean().refine((data) => data, {
    message: "Please accept the terms and conditions",
  }),
});
