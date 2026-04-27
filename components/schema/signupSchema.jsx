import { z } from "zod";

export const signupSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .trim(),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});