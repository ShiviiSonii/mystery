import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must contain atleast 2 characters")
  .max(20, "Username must be less than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must contain special characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(6, "Password must contain atleast 6 characters"),
});
